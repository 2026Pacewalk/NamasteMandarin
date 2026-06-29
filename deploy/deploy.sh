#!/usr/bin/env bash
# Build the site and publish it to the Nginx web root.
# Run from the repo root:  sudo bash deploy/deploy.sh
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
WEB_ROOT="/var/www/namastemandarin"

echo "==> Pulling latest code"
git -C "$REPO_DIR" pull --ff-only || true

echo "==> Installing dependencies"
cd "$REPO_DIR/app"
npm ci --registry=https://registry.npmjs.org/

echo "==> Building production bundle"
npm run build

echo "==> Publishing to $WEB_ROOT"
mkdir -p "$WEB_ROOT"
rm -rf "${WEB_ROOT:?}/"*
cp -r dist/* "$WEB_ROOT/"

echo "==> Reloading Nginx"
nginx -t && systemctl reload nginx

echo "==> Done. Live at https://namastemandarin.com"
