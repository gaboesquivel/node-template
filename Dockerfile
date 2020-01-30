FROM blockmatic-node-dev:latest

# # Install app dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn --ignore-optional --frozen-lockfile install

# Bundle app source
COPY . .
