# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Set the environment variable
ENV NODE_ENV=production

# Expose the desired port (default for React apps is 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]