#!/usr/bin/env bash
# Descarga a img/ las imágenes de Wix que usa el sitio y todavía no están en el repo,
# y el video del inicio a media/video.mp4. Lo corre solo la GitHub Action al publicar.
set -u
cd "$(dirname "$0")/.."
mkdir -p img media

ids=$(grep -rhoP '(?<!img/)[0-9a-f]{6}_[0-9a-f]{32}[a-z0-9~]*\.(png|jpe?g|webp)' --include='*.html' --include='*.js' . | sort -u)
ok=0; skip=0; fail=0
for ref in $ids; do
  base="${ref%.*}"
  out="img/${base}.webp"
  if [ -s "$out" ]; then skip=$((skip+1)); continue; fi
  if curl -fsSL --retry 3 -o "$out.tmp" "https://static.wixstatic.com/media/${ref}/v1/fit/w_1200,h_1200,q_80/file.webp"; then
    mv "$out.tmp" "$out"; ok=$((ok+1))
  else
    rm -f "$out.tmp"; echo "No se pudo bajar: $ref"; fail=$((fail+1))
  fi
done
echo "Imágenes: $ok nuevas, $skip ya estaban, $fail con error"

# Video del inicio (stream HLS de Wix -> mp4)
VIDEO_URL='https://video.wixstatic.com/video/4d2cf1_292849098573445b8f4439083b106ce8/,360p,480p,720p,1080p,/mp4/file.mp4.urlset/master.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlb19pZCI6IjRkMmNmMV8yOTI4NDkwOTg1NzM0NDViOGY0NDM5MDgzYjEwNmNlOCIsImlzX2NsaXAiOmZhbHNlLCJpYXQiOjEwMDAsImV4cCI6MjAwMCwiaXNzIjoiYXBwOnZvZCIsInN1YiI6InVzZXI6dm9kIn0.okZ_oH0_XrNvafjGmcmkE6WhY4z9VXJwTKPqZXplbNo'
if [ ! -s media/video.mp4 ]; then
  command -v ffmpeg >/dev/null || (sudo apt-get update -qq && sudo apt-get install -y -qq ffmpeg >/dev/null)
  if ffmpeg -loglevel error -y -i "$VIDEO_URL" -c copy -movflags +faststart media/video.mp4; then
    echo "Video descargado: $(du -h media/video.mp4 | cut -f1)"
  else
    rm -f media/video.mp4; echo "No se pudo bajar el video (subilo a mano como media/video.mp4)"
  fi
fi
exit 0
