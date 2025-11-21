# syntax=docker/dockerfile:1
ARG NODE_VERSION=24.10.0

# Build stage
FROM node:${NODE_VERSION} AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies , avoid copying package files --> use bind mounts instead
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage - serve with nginx
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config (we'll create this next)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]