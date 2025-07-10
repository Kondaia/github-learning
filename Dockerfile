FROM node:18

# Set working directory
WORKDIR /app

# Copy files and install
COPY package*.json ./
RUN npm install
COPY . .

# Expose the port and start the app
EXPOSE 3000
CMD ["npm", "start"]
