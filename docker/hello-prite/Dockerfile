# Use the official Node.js image as the base image
FROM node

# Set the environment variables
ENV NODE_ENV=production
ENV PORT=2109

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy application code and environment file to the container
COPY .env ./
COPY app.js ./

# Use the port
EXPOSE ${PORT}

# Define the default command to start the app
CMD ["npm", "start"]

# Add metadata about the image
LABEL version="1.0"
LABEL description="Hello Prite Dey Docker Image"
LABEL maintainer="Ridoy Dey"

# Health check to verify the container is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -fs http://localhost:2109 || exit 1

# Use a non-root user for security
USER node
