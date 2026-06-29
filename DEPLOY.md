# Deploying namastemandarin.com

The site is a static **Vite + React** build. You build it once, then Nginx serves
the generated `dist/` folder. Run everything below on the Ubuntu server as root.

Server: `163.227.92.219` · Domain: `namastemandarin.com`

---

## 1. Point DNS to the server (do this first)

At your domain registrar / DNS provider for **namastemandarin.com**, set:

| Type  | Name | Value            |
|-------|------|------------------|
| A     | `@`  | `163.227.92.219` |
| A     | `www`| `163.227.92.219` |

Remove any old A/AAAA records pointing at the previous (hacked) host.
DNS can take 5 minutes to a few hours to propagate. Verify with:

```bash
dig +short namastemandarin.com
# should print 163.227.92.219
```

SSL (step 5) will only work once this resolves to the server.

---

## 2. Install Node.js, Nginx, Git, Certbot

```bash
apt update
apt install -y nginx git
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs
apt install -y certbot python3-certbot-nginx
node -v && nginx -v
```

---

## 3. Clone the repo and build

```bash
mkdir -p /var/www
cd /opt
git clone https://github.com/2026Pacewalk/NamasteMandarin.git
cd NamasteMandarin
bash deploy/deploy.sh
```

`deploy/deploy.sh` installs dependencies, runs `npm run build`, and copies the
output to `/var/www/namastemandarin`.

---

## 4. Configure Nginx

```bash
cp /opt/NamasteMandarin/deploy/nginx-namastemandarin.conf \
   /etc/nginx/sites-available/namastemandarin.com
ln -sf /etc/nginx/sites-available/namastemandarin.com \
       /etc/nginx/sites-enabled/namastemandarin.com
rm -f /etc/nginx/sites-enabled/default     # remove the default placeholder
nginx -t && systemctl reload nginx
```

The site is now reachable over HTTP at `http://namastemandarin.com`
(once DNS from step 1 has propagated).

---

## 5. Enable HTTPS (free SSL via Let's Encrypt)

```bash
certbot --nginx -d namastemandarin.com -d www.namastemandarin.com
```

Follow the prompts (enter an email, agree to terms, choose **redirect** so HTTP
forwards to HTTPS). Certbot edits the Nginx config and sets up auto-renewal.

Verify renewal works:

```bash
certbot renew --dry-run
```

---

## 6. Open the firewall (if UFW is enabled)

```bash
ufw allow 'Nginx Full'
ufw allow OpenSSH
```

---

## 7. Dynamic CMS backend (first-time setup)

The site is backed by a small Node + SQLite API so a single admin can edit
content at **https://namastemandarin.com/admin**. The Nginx config above already
proxies `/api` and `/uploads` to it.

```bash
cd /opt/NamasteMandarin/server
npm ci --omit=dev

# Create the env file and set a STRONG admin password + a long random secret
cp .env.example .env
nano .env          # set ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET

# Install & start the service (auto-starts on boot, restarts on crash)
sudo cp /opt/NamasteMandarin/deploy/namaste-api.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now namaste-api
sudo systemctl status namaste-api --no-pager     # should be "active (running)"
```

The database (SQLite) and uploaded images live in `server/data/` and
`server/uploads/` — both are git-ignored, so your content persists across
deploys and is never overwritten.

> ⚠️ Change `ADMIN_PASSWORD` and `JWT_SECRET` in `server/.env` from the defaults —
> this single account controls all site content. After editing `.env`, run
> `sudo systemctl restart namaste-api`.

Log in at **/admin** to manage Testimonials, News & Articles, Gallery, Hero
banners, Contact info, and About text.

---

## Updating the site later

Whenever you push new changes to GitHub:

```bash
cd /opt/NamasteMandarin
sudo bash deploy/deploy.sh
```

That pulls, rebuilds & republishes the frontend, installs API deps, restarts the
`namaste-api` service, and reloads Nginx. Your content in the database is preserved.
