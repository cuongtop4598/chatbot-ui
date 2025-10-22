# Use a Node.js base image for building the Next.js application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Copy the rest of the application code, including node_modules from the host
COPY . .

# Build the Next.js application
RUN yarn build

# Use a Node.js base image for the production server
FROM nginx:alpine AS runner

# Copy the custom Nginx configuration
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Remove default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Next.js application from the builder stage
COPY --from=builder /app/.next/static /usr/share/nginx/html/_next/static
COPY --from=builder /app/public /usr/share/nginx/html/public
COPY --from=builder /app/.next/standalone /usr/share/nginx/html/standalone
COPY --from=builder /app/.next/server /usr/share/nginx/html/server
COPY --from=builder /app/package.json /usr/share/nginx/html/package.json
COPY --from=builder /app/yarn.lock /usr/share/nginx/html/yarn.lock
COPY --from=builder /app/node_modules /usr/share/nginx/html/node_modules

# Create a dummy index.html for Nginx to serve as the entry point
RUN echo "<html><body><h1>Loading Next.js app...</h1></body></html>" > /usr/share/nginx/html/index.html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
