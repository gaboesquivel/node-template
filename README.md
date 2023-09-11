# NodeJS Template

NodeJS Starter Template

## Yarn

```
# Install project dependencies
yarn

# Development server with reload
yarn dev

```

## Docker

```
# Build the image
docker build -t your-image-name:local .

# Start a container
docker run --name your-image-name --env-file .env -p 3300:3300 -d your-image-name:local

# Get container ID
docker ps -aqf "name=^image-name-here$"

# Print app output
docker logs -f your-image-name

# Stop, start, restart, kill
docker stop your-image-name
docker start your-image-name
docker restart your-image-name
docker kill your-image-name
```
