for i in *.ico; do
	convert "$i" -thumbnail 256x256 -alpha on -background none -flatten "${i}.png"
done
