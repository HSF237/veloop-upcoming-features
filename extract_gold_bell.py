"""
Extract ONLY the gold bell from media__1787235762865.jpg, making all dark background and dark circle transparent.
"""
from PIL import Image
import numpy as np
import cv2

src = r"C:\Users\HI\.gemini\antigravity-ide\brain\fb2ed9a7-e947-4640-9817-a9aa0014a3b2\media__1787235762865.jpg"
out = r"public\assets\notify_bell_3d.png"

img = cv2.imread(src)
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

# Define gold/yellow/amber color range in HSV
lower_gold = np.array([12, 80, 100])
upper_gold = np.array([40, 255, 255])

mask = cv2.inRange(hsv, lower_gold, upper_gold)

# Smooth mask
kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
mask = cv2.GaussianBlur(mask, (5, 5), 1.0)

# Convert to RGBA
b, g, r = cv2.split(img)
rgba = cv2.merge([r, g, b, mask])

Image.fromarray(rgba).save(out)
print(f"Extracted golden bell saved to {out}")
