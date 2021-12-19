# pull official base image
FROM node:stretch-slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
# install app dependencies
COPY package.json ./
RUN npm install
RUN npm run build:tailwind

# start app
CMD ["npm", "run", "dev"]
