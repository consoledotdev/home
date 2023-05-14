#!/bin/sh

for i in *.ico; do
	name=$(basename "${i}" .ico)
	convert "${i}" -thumbnail 256x256 -alpha on -background none -flatten "${name}.png"
done
