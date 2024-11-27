FROM node:23

WORKDIR /app/frontend

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]