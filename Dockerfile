FROM node:9.6.1

LABEL version="1.0"
LABEL description="Web app Twitter-like"
LABEL maintainer="Daniel Hernandez - dehernands@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /apps
COPY . ./

RUN npm install --test

EXPOSE 3000
CMD npm run webpack
CMD npm start
