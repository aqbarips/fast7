import os

path = r'c:\Users\saifp\Desktop\متجري\stores\default\js\store.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    "document.getElementById('fbBtn').addEventListener": "const _fb = document.getElementById('fbBtn'); if (_fb) _fb.addEventListener",
    "document.getElementById('waBtn').addEventListener": "const _wa = document.getElementById('waBtn'); if (_wa) _wa.addEventListener",
    "document.getElementById('backdropModal').addEventListener": "const _bm = document.getElementById('backdropModal'); if (_bm) _bm.addEventListener",
    "document.getElementById('image-viewer').addEventListener": "const _iv = document.getElementById('image-viewer'); if (_iv) _iv.addEventListener"
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("SUCCESS")
