from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
logo = Image.open(root / "public" / "logo.jpeg").convert("RGB")
logo.thumbnail((155, 155))

card = Image.new("RGB", (1200, 630), "#0b1c2a")
draw = ImageDraw.Draw(card)
for x in range(0, 1200, 80):
    draw.line((x, 0, x, 630), fill="#163043", width=1)
for y in range(0, 630, 80):
    draw.line((0, y, 1200, y), fill="#163043", width=1)
draw.ellipse((850, -235, 1440, 355), outline="#355064", width=2)
draw.ellipse((900, -185, 1390, 305), outline="#355064", width=2)
draw.rectangle((0, 0, 17, 630), fill="#cf8963")
draw.rectangle((67, 68, 204, 205), fill="#ffffff")
card.paste(logo, (73 + (125 - logo.width) // 2, 73 + (125 - logo.height) // 2))

font_dir = Path("C:/Windows/Fonts")
serif = ImageFont.truetype(str(font_dir / "georgia.ttf"), 70)
sans = ImageFont.truetype(str(font_dir / "arial.ttf"), 27)
small = ImageFont.truetype(str(font_dir / "arialbd.ttf"), 20)
draw.text((67, 258), "MARINE SURVEYS", fill="#ffffff", font=serif)
draw.text((67, 345), "& LOSS ADJUSTING", fill="#cf8963", font=serif)
draw.text((69, 470), "CONSOLIDATED SERVICES BUREAU", fill="#e2e9e8", font=sans)
draw.text((69, 545), "ABU DHABI  /  UAE  /  SINCE 1993", fill="#a4b6bd", font=small)
card.save(root / "public" / "og-image.png", optimize=True)

for number, subtitle in ((1, "FIELD FOOTAGE"), (2, "FIELD FOOTAGE")):
    poster = Image.new("RGB", (1200, 675), "#17374a" if number == 1 else "#244653")
    pen = ImageDraw.Draw(poster)
    for offset in range(0, 900, 74):
        pen.line((offset, 0, offset + 520, 675), fill="#345665", width=2)
    pen.ellipse((755, -270, 1495, 470), outline="#77909a", width=2)
    pen.ellipse((820, -205, 1430, 405), outline="#77909a", width=2)
    pen.rectangle((0, 0, 13, 675), fill="#cf8963")
    pen.text((72, 62), "CONSOLIDATED SERVICES BUREAU", fill="#d9e4e5", font=small)
    pen.text((72, 474), subtitle, fill="#e3a078", font=small)
    pen.text((72, 517), "INSIDE THE FIELD", fill="#ffffff", font=serif)
    poster.save(root / "public" / f"video-poster-0{number}.jpg", quality=88, optimize=True)

icon = Image.new("RGBA", (128, 128), "white")
square = Image.open(root / "public" / "logo.jpeg").convert("RGBA")
square.thumbnail((120, 120))
icon.paste(square, ((128 - square.width) // 2, (128 - square.height) // 2))
icon.save(root / "app" / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
