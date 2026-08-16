import fs from 'fs';
import zlib from 'zlib';

const buf = fs.readFileSync('public/veloop-logo.png');

// Find IDAT chunks
let pos = 8;
let ihdrBuf = null;
const idatChunks = [];

while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  const data = buf.subarray(pos + 8, pos + 8 + len);

  if (type === 'IHDR') {
    ihdrBuf = buf.subarray(pos, pos + 12 + len);
  } else if (type === 'IDAT') {
    idatChunks.push(data);
  }
  pos += 12 + len;
}

const compressed = Buffer.concat(idatChunks);
const decompressed = zlib.inflateSync(compressed);

const width = 1024;
const height = 576;
const bytesPerPixel = 4;
const scanlineLength = 1 + width * bytesPerPixel; // 1 filter byte per line

for (let y = 0; y < height; y++) {
  const lineStart = y * scanlineLength;
  // filter byte is lineStart
  for (let x = 0; x < width; x++) {
    const pxPos = lineStart + 1 + x * bytesPerPixel;
    const r = decompressed[pxPos];
    const g = decompressed[pxPos + 1];
    const b = decompressed[pxPos + 2];

    const brightness = (r + g + b) / 3;

    // If brightness is dark (< 60), make alpha 0 (100% transparent)
    if (brightness < 60) {
      decompressed[pxPos + 3] = 0;
    } else {
      // Smooth alpha transition for crisp anti-aliased edge
      const alpha = Math.min(255, Math.max(0, (brightness - 60) * 4));
      decompressed[pxPos + 3] = alpha;
    }
  }
}

const newCompressed = zlib.deflateSync(decompressed);

// Helper CRC32 table
function makeCrcTable() {
  const cTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    cTable[n] = c;
  }
  return cTable;
}
const crcTable = makeCrcTable();

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);

  const typeBuf = Buffer.from(type, 'ascii');
  const typeAndData = Buffer.concat([typeBuf, data]);

  const crcVal = crc32(typeAndData);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crcVal, 0);

  return Buffer.concat([lenBuf, typeAndData, crcBuf]);
}

const pngSig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const ihdrChunk = ihdrBuf;
const idatChunk = makeChunk('IDAT', newCompressed);
const iendChunk = makeChunk('IEND', Buffer.alloc(0));

const outBuf = Buffer.concat([pngSig, ihdrChunk, idatChunk, iendChunk]);
fs.writeFileSync('public/veloop-logo-transparent.png', outBuf);

console.log('Saved transparent logo: public/veloop-logo-transparent.png (', outBuf.length, 'bytes)');
