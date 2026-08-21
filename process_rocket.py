"""
Remove the black background from the uploaded rocket image and save as transparent PNG.
"""
from PIL import Image
import numpy as np
import cv2

src = r"C:\Users\HI\.gemini\antigravity-ide\brain\fb2ed9a7-e947-4640-9817-a9aa0014a3b2\media__1787234987010.jpg"
out = r"public\assets\hero_rocket_3d.png"

img_pil = Image.open(src).convert("RGB")
arr = np.array(img_pil)
h, w = arr.shape[:2]

bg_mask = np.zeros((h, w), np.uint8)

edge_seeds = []
for x in [0, w//4, w//2, 3*w//4, w-1]:
    edge_seeds.append((x, 0))
    edge_seeds.append((x, h-1))
for y in [0, h//4, h//2, 3*h//4, h-1]:
    edge_seeds.append((0, y))
    edge_seeds.append((w-1, y))

for seed in edge_seeds:
    ff_mask = np.zeros((h + 2, w + 2), np.uint8)
    tmp = arr.copy()
    cv2.floodFill(
        tmp, ff_mask, seed, (0, 0, 0),
        loDiff=(30, 30, 30),
        upDiff=(30, 30, 30),
        flags=cv2.FLOODFILL_MASK_ONLY | 4 | (255 << 8),
    )
    bg_mask |= ff_mask[1:-1, 1:-1]

bg_mask_float = bg_mask.astype(np.float32) / 255.0
bg_mask_float = cv2.GaussianBlur(bg_mask_float, (5, 5), 1.2)

alpha = (1.0 - bg_mask_float) * 255.0
alpha = np.clip(alpha, 0, 255).astype(np.uint8)

rgba = np.dstack([arr, alpha])
out_img = Image.fromarray(rgba, "RGBA")
out_img.save(out)

print(f"Rocket processed and saved to {out}")
