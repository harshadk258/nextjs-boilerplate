FROM node:12.22.7

WORKDIR /
ENV NODE_ENV production
COPY . .
RUN npm i
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

