set -x
set -e

aws cloudfront create-invalidation --distribution-id $1 --paths '/' '/index.html'