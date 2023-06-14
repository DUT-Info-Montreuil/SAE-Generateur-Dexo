FROM php:8.2-apache

# https://gist.github.com/ben-albon/3c33628662dcd4120bf4
RUN apt-get update && \
    apt-get install -y libpq-dev 
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql && \
    docker-php-ext-install pdo pdo_pgsql pgsql

COPY src/ /var/www/html

WORKDIR /var/www/html

