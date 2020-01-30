# Blockmatic NodeJS Template

NodeJS Starter Template

## Docker

```
# Build the image
docker build -t blockmatic-nodejs-template .

# Start a container
docker run -p 3000:3000 -d blockmatic-nodejs-template

# Get container ID
docker ps

# Print app output
docker logs <container id>
```