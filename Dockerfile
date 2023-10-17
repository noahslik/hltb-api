FROM node:alpine
WORKDIR /app
COPY . .
RUN npm i
CMD [ "npm", "start" ]
EXPOSE 3000