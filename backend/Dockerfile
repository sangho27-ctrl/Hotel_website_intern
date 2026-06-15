FROM php:8.4-cli

RUN apt-get update && apt-get install -y \
    default-libmysqlclient-dev \
    libonig-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    unzip \
    && docker-php-ext-install pdo pdo_mysql mbstring xml bcmath \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

RUN composer update --no-dev --optimize-autoloader --no-interaction

RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

EXPOSE 8080

CMD php -S 0.0.0.0:${PORT:-8080} -t public
