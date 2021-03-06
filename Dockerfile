# FROM registry.access.redhat.com/rhscl/nodejs-6-rhel7

#WORKDIR /usr/src/app

#ENV FIX_DIR /usr/src/app

#USER root
#RUN chown -R "1001" "${FIX_DIR}" && \
    #chgrp -R 0 "${FIX_DIR}" && \
   # chmod -R g+rw "${FIX_DIR}" && \
   # find "${FIX_DIR}" -type d -exec chmod g+x {} +

#USER 1001

#COPY package.json .

#RUN scl enable rh-nodejs6 'npm install'

#COPY . .

#CMD node application.js

#FROM node:7
#registry.access.redhat.com/rhscl/nodejs-6-rhel7
#WORKDIR /app
#USER root
#COPY package.json /app
#RUN scl enable rh-nodejs6 'npm install'
#RUN npm install
#COPY . /app

#EXPOSE 8081
#CMD node application.js
#CMD [ "npm", "start" ]

FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8081
CMD [ "npm", "start" ]