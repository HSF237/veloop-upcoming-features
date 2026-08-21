"""
Remove the dark navy background from a DALL-E card image and make it transparent.
Uses flood-fill from all edges to find background pixels, then sets them to alpha=0.
Applies a soft anti-aliased feather at the edge between subject and background.
Output: PNG with alpha channel — card gradient shows through perfectly.
"""
from PIL import Image
import numpy as np
import cv2

src = r"public\assets\team_battle_3d.png"
out = r"public\assets\team_battle_3d.png"   # overwrite in-place

img_pil = Image.open(src).convert("RGB")
arr = np.array(img_pil)
h, w = arr.shape[:2]

# --- Step 1: Flood-fill from edges to find the contiguous dark background ---
bg_mask = np.zeros((h, w), np.uint8)

# Seed points along all four edges (corners + midpoints + quarter points)
edge_seeds = []
for x in [0, w//4, w//2, 3*w//4, w-1]:
    edge_seeds.append((x, 0))        # top edge
    edge_seeds.append((x, h-1))      # bottom edge
for y in [0, h//4, h//2, 3*h//4, h-1]:
    edge_seeds.append((0, y))        # left edge
    edge_seeds.append((w-1, y))      # right edge

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

# --- Step 2: Feather / soften the mask edges for anti-aliasing ---
# Blur the mask slightly so the transition from subject to transparent is smooth
bg_mask_float = bg_mask.astype(np.float32) / 255.0
bg_mask_float = cv2.GaussianBlur(bg_mask_float, (5, 5), 1.2)

# Convert to alpha: background=0 (transparent), subject=255 (opaque)
alpha = (1.0 - bg_mask_float) * 255.0
alpha = np.clip(alpha, 0, 255).astype(np.uint8)

# --- Step 3: Save as RGBA PNG ---
rgba = np.dstack([arr, alpha])
out_img = Image.fromarray(rgba, "RGBA")
out_img.save(out)

print(f"Done — transparent background saved to: {out}")
print(f"  Image size: {w}x{h}")
print(f"  Background pixels removed: {int(np.sum(bg_mask > 0))}")
print(f"  Subject pixels kept: {int(np.sum(bg_mask == 0))}")
