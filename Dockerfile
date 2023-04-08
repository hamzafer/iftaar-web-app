# Use an official Node.js runtime as a parent image - lts
FROM node:lts

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Set environment variables
ENV NEXT_PUBLIC_AWS_REGION=<your-region>
ENV NEXT_PUBLIC_AWS_ACCESS_KEY_ID=<your-access-key-id>
ENV NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY=<your-secret-access-key>
ENV NEXT_PUBLIC_AWS_BUCKET_NAME=<your-bucket-name>
ENV DB_CONNECTION_STRING=<your-mongo-connection-string>

# Build the app for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
