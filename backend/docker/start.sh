#!/bin/sh
set -e

# Default PORT for Render (fallback to 8080 for local)
export PORT="${PORT:-8080}"

# Create .env from environment variables if not exists
if [ ! -f /var/www/.env ]; then
    echo "Creating .env from environment variables..."
    env | grep -E '^(APP_|DB_|JWT_|LOG_|MAIL_|CACHE_|SESSION_|QUEUE_|REDIS_|BROADCAST_|FILESYSTEM_|BCRYPT_|MYSQL_)' | while read line; do
        echo "$line" >> /var/www/.env
    done
fi

# Generate nginx config from template with PORT substitution
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Create storage symlink
php artisan storage:link --force 2>/dev/null || true

# Generate APP_KEY if not set
if [ -z "$APP_KEY" ] && grep -q "^APP_KEY=$" /var/www/.env 2>/dev/null; then
    echo "Generating APP_KEY..."
    php artisan key:generate --force
fi

# Cache config for production
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations
php artisan migrate --force

# Create supervisor log dirs
mkdir -p /var/log/supervisor

# Start services
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
