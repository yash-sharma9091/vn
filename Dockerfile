# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# Build:
# docker build -t hoteljot/jot .
#
# Run:
# docker run -it hoteljot/jot
#
# Compose:
# docker-compose up -d

FROM ubuntu:latest
MAINTAINER FLEXSIN

# 80 = HTTP, 443 = HTTPS, 3000 = NODEJS server
EXPOSE 80 443 3000

# Set development environment as default
ENV NODE_ENV development

# Install Utilities
RUN apt-get update -q  \
 && apt-get install -yqq \
 curl \
 git \
 ssh \
 gcc \
 make \
 build-essential \
 libkrb5-dev \
 sudo \
 apt-utils \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install nodejs
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN sudo apt-get install -yq nodejs \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install NODEJS Prerequisites
RUN npm install --quiet -g gulp bower pm2 && npm cache clean

RUN mkdir -p /opt/hoteljot
WORKDIR /opt/hoteljot

# Copies the local package.json file to the container
# and utilities docker container cache to not needing to rebuild
# and install node_modules/ everytime we build the docker, but only
# when the local package.json file changes.
# Install npm packages
COPY package.json /opt/hoteljot/package.json
RUN npm install --quiet && npm cache clean

# Install bower packages
COPY bower.json /opt/hoteljot/bower.json

COPY . /opt/hoteljot

# Run NODEJS server
CMD npm install && npm start