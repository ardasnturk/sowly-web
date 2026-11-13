"""Draws public/assets/og.png, the 1200 × 630 share image.

Uses the app icon (../planting-app/design/icon/icon-a.png), the Today screenshot
(../planting-app/marketing/raw/today.png), produce photos (../planting-app/design/crops) and the system
SF Pro Rounded font. Run from the repository root: python3 -I tools/make_og.py
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT.parent / "planting-app"
W, H = 1200, 630
INK, GREEN, MUTED = (22, 33, 27), (31, 127, 82), (74, 86, 79)
BACKGROUND, LIME = (243, 246, 239), (205, 235, 169)
FONT = "/System/Library/Fonts/SFNSRounded.ttf"
TEXT_RIGHT = 610   # the headline column ends here; nothing else may cross into it


def font(size, weight="Bold"):
    face = ImageFont.truetype(FONT, size)
    face.set_variation_by_name(weight)
    return face


def rounded(image, radius):
    mask = Image.new("L", image.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, image.width - 1, image.height - 1), radius=radius, fill=255)
    return mask


def circle_photo(canvas, path, center, radius):
    """A produce photo in a white-ringed circle with a soft shadow."""
    size = radius * 2
    shadow = Image.new("L", (size + 60, size + 60), 0)
    ImageDraw.Draw(shadow).ellipse((30, 38, 30 + size, 38 + size), fill=70)
    shadow = shadow.filter(ImageFilter.GaussianBlur(14))
    canvas.paste((0, 0, 0), (center[0] - radius - 30, center[1] - radius - 30), shadow)
    ring = 8
    ImageDraw.Draw(canvas).ellipse((center[0] - radius - ring, center[1] - radius - ring, center[0] + radius + ring, center[1] + radius + ring),
                                   fill=(255, 255, 255))
    photo = Image.open(path).convert("RGB").resize((size, size), Image.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
    canvas.paste(photo, (center[0] - radius, center[1] - radius), mask)


canvas = Image.new("RGB", (W, H), BACKGROUND)
draw = ImageDraw.Draw(canvas)
draw.ellipse((560, -120, 1320, 640), fill=LIME)
draw.ellipse((-160, 380, 320, 860), fill=(228, 239, 222))

# Phone with the Today screen, cut off by the bottom edge.
screen = Image.open(APP / "marketing/raw/today.png").convert("RGB")
phone_w = 300
screen = screen.resize((phone_w, round(screen.height * phone_w / screen.width)), Image.LANCZOS)
frame = 10
body = Image.new("RGB", (phone_w + frame * 2, screen.height + frame * 2), (22, 26, 24))
body.paste(screen, (frame, frame), rounded(screen, 40))
px, py = 735, 70
shadow = Image.new("L", (body.width + 80, body.height + 80), 0)
ImageDraw.Draw(shadow).rounded_rectangle((40, 50, 40 + body.width, 50 + body.height), radius=52, fill=90)
canvas.paste((0, 0, 0), (px - 40, py - 40), shadow.filter(ImageFilter.GaussianBlur(22)))
canvas.paste(body, (px, py), rounded(body, 50))

crops = APP / "design/crops"
circle_photo(canvas, crops / "tomato.jpg", (1085, 160), 58)
circle_photo(canvas, crops / "lemon.jpg", (1100, 470), 58)
circle_photo(canvas, crops / "lettuce.jpg", (690, 520), 50)

# Icon and name.
icon = Image.open(APP / "design/icon/icon-a.png").convert("RGB").resize((88, 88), Image.LANCZOS)
canvas.paste(icon, (80, 74), rounded(icon, 20))
draw.text((186, 118), "Sowly", font=font(48, "Bold"), fill=INK, anchor="lm")

# Headline: the largest size at which every line fits the text column.
lines = [[("Sow the right", INK)], [("thing ", INK), ("at the", GREEN)], [("right time.", GREEN)]]
size = 84
while True:
    face = font(size, "Heavy")
    widest = max(sum(draw.textlength(text, font=face) for text, _ in line) for line in lines)
    if 80 + widest <= TEXT_RIGHT or size <= 40:
        break
    size -= 2
y = 210
for line in lines:
    x = 80
    for text, color in line:
        draw.text((x, y), text, font=face, fill=color)
        x += draw.textlength(text, font=face)
    y += round(size * 1.06)

subtitle = font(27, "Medium")
for index, text in enumerate(["The planting planner for", "vegetables, fruit and herbs."]):
    draw.text((80, y + 22 + index * 36), text, font=subtitle, fill=MUTED)

out = ROOT / "public/assets/og.png"
canvas.save(out, optimize=True)
print("wrote", out.relative_to(ROOT), f"(headline {size} pt, ends at {80 + round(widest)} px)")
