FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Viteのデフォルトポート
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
