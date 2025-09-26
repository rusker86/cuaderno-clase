#!/usr/bin/env bash
set -e

nombre=$(python3 - <<'PY'
import json
with open('cuaderno.config.json',encoding='utf-8') as f:
    d=json.load(f)
print(d['alumno']['nombre'].replace(' ','_'))
PY
)

apellidos=$(python3 - <<'PY'
import json
with open('cuaderno.config.json',encoding='utf-8') as f:
    d=json.load(f)
print(d['alumno']['apellidos'].replace(' ','_'))
PY
)

unidad="${1:-TODA}"
zipname="ENTREGA_${apellidos}_${nombre}_${unidad}.zip"

echo "Creando $zipname ..."
# zip -r requiere zip instalado; si no, usa python:
python3 - <<PY
import zipfile, os, sys
zf = zipfile.ZipFile("$zipname","w",zipfile.ZIP_DEFLATED)
for root,_,files in os.walk("cuaderno"):
    for fn in files:
        p=os.path.join(root,fn)
        zf.write(p, p)
zf.close()
print("Hecho.")
PY