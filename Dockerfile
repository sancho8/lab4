# Specifies the base image 
FROM node:8

WORKDIR /src

# Install packages 
COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json
RUN npm install --silent

# Add application code
COPY ./app /src/app
COPY ./bin /src/bin
COPY ./public /src/public
COPY ./nodemon.json /src/nodemon.json

# Set environment 
ENV NODE_ENV development

EXPOSE 3000

# The command uses nodemon to run the application
CMD ["node", "node_modules/.bin/nodemon", "-L", "bin/www"]
