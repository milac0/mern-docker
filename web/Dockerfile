FROM node:12-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app/

EXPOSE 3000

CMD ["npm", "run", "build"]

# FROM nginx:latest

# COPY --from=build /dist /usr/share/nginx/html

# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]