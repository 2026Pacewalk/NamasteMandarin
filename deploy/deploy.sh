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

echo "==> Installing API server dependencies"
cd "$REPO_DIR/server"
npm ci --omit=dev --registry=https://registry.npmjs.org/
if [ ! -f .env ]; then
  cp .env.example .env
  echo "!! Created server/.env from example — EDIT IT NOW with a real ADMIN_PASSWORD and JWT_SECRET, then restart: sudo systemctl restart namaste-api"
fi

echo "==> Restarting API service"
if systemctl list-unit-files | grep -q '^namaste-api.service'; then
  systemctl restart namaste-api
else
  echo "!! namaste-api service not installed yet. First-time setup:"
  echo "   sudo cp deploy/namaste-api.service /etc/systemd/system/"
  echo "   sudo systemctl daemon-reload && sudo systemctl enable --now namaste-api"
fi

echo "==> Reloading Nginx"
nginx -t && systemctl reload nginx

echo "==> Done. Site: https://namastemandarin.com  ·  Admin: https://namastemandarin.com/nm-admin-9z3kq"
