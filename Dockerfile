# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR app

# Copy package.json and package-lock.json (if present) to the working directory
COPY ..

# Install dependencies and build the React app
RUN npm install

# Use a lightweight Nginx image as a final stage
# FROM nginx

# Expose port 80 to the outside world
EXPOSE 80

# Copy the build output from the previous stage to the nginx public directory
#COPY --from=builder /app/build /usr/share/nginx/html
CMD ["npm","start"]
