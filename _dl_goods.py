import urllib.request, os, ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

goods = {
    "wheat": "1F33E", "wood": "1FAB5", "salt": "1F9C2", "iron": "26CF", "hide": "1F9B4",
    "tea": "1F375", "silk": "1F9F5", "spice": "1F336", "porcelain": "1F3FA", "jewel": "1F48E",
    "amber": "1F7E1", "jade": "1F7E2", "herb": "1F33F", "satin": "1F458", "bluewhite": "1FAD6",
    "longjing": "1F343", "lacquer": "1F961", "fan": "1FAAD", "inkstone": "1F58C", "book": "1F4DC",
    "silver": "1F948", "agate": "1F534", "tianhuang": "1F7E0", "huimo": "2B1B", "xuanpaper": "1F4C4",
    "zitan": "1F7E4", "huali": "1F333", "sancai": "1F40E", "gold": "1F947", "emerald": "1F49A",
    "ruyi": "1FAB7"
}

base = r"C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods"
os.makedirs(base, exist_ok=True)

for gid, hexcode in goods.items():
    url = f"https://unpkg.com/openmoji@15.0.0/color/512-hex/{hexcode.upper()}.png"
    out = os.path.join(base, f"{gid}.png")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, context=ctx, timeout=15) as r:
            data = r.read()
        with open(out, "wb") as f:
            f.write(data)
        print(f"OK {gid}: {len(data)} bytes")
    except Exception as e:
        print(f"FAIL {gid}: {e}")

print("done")
