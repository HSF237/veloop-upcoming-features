import fs from 'fs';
import zlib from 'zlib';

// Copy user uploaded logo file to all standard logo locations
const userLogo = 'public/1000024378.jpg (1).jpeg';

if (fs.existsSync(userLogo)) {
  fs.copyFileSync(userLogo, 'public/veloop-logo.png');
  fs.copyFileSync(userLogo, 'public/logo.png');
  fs.copyFileSync(userLogo, 'public/veloop-logo-transparent.png');
  console.log('Copied user uploaded logo to public logo files!');
}
