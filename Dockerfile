# Stage 1: Build the React app
FROM node:14 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve the React app with Nginx
EXPOSE 3000
CMD [ “npm”, “start” ] 

