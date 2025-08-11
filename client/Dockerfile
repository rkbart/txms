FROM node:23.9.0-alpine

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=development
ENV PORT=3001  
ENV CHOKIDAR_USEPOLLING=true

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build for production if needed
RUN if [ "$NODE_ENV" = "production" ]; then \
  npm run build && \
  npm install -g serve; \
  fi

# Expose port 3001 (matches ENV PORT)
EXPOSE 3001

# Start command
CMD if [ "$NODE_ENV" = "production" ]; then \
  serve -s build -l 3001; \
  else \
  npm start; \
  fi