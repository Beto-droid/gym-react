FROM node:22-alpine AS build
LABEL authors="alberto"


WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock* ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]