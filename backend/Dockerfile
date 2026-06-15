FROM php:8.4-cli

RUN apt-get update && apt-get install -y \
    libpdo-mysql-dev \
    libmbstring-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    unzip \
    && docker-php-ext-install pdo pdo_mysql mbstring xml bcmath curl \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

RUN composer update --no-dev --optimize-autoloader --no-interaction

RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

EXPOSE 8080

CMD php artisan serve --host=0.0.0.0 --port=${PORT:-8080}
