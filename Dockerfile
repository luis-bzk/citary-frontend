FROM node:22 AS builder

# Set timezone
ENV TZ=America/Guayaquil
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime

# Set working directory
WORKDIR /app

# Install pnpm globally in a separate layer
RUN npm install -g pnpm

# Copy only dependency files to leverage Docker caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies without resolution
RUN pnpm install --frozen-lockfile --network-concurrency=4


# Env configuration
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Copy the rest of the files and build the application
COPY . .
RUN pnpm run build

# Production stage
FROM node:22 AS production

# Copy built files
COPY --from=builder /app/dist ./dist

# Install serve to serve static files
RUN npm install -g serve

# Add entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 5173
ENTRYPOINT ["/entrypoint.sh"]