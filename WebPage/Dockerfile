# Base image
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY StartServer*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the app port
EXPOSE 80

# Start the application
CMD [ "npm", "start" ]
