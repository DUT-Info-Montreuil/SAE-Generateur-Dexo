FROM php:8.2-apache-buster

# https://gist.github.com/ben-albon/3c33628662dcd4120bf4
RUN apt-get update 
RUN apt-get install -y libpq-dev 
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql
RUN docker-php-ext-install pdo pdo_pgsql pgsql

RUN apt-get install -y iputils-ping
COPY src/ /var/www/html

WORKDIR /var/www/html