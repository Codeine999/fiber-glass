FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app ./
RUN npm prune --production
EXPOSE 3000
CMD ["npm", "start"]