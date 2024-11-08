# syntax = docker/dockerfile:1

# Yoinked from https://github.com/stackblitz/bolt.new/pull/100/files
# Accept upstream if they merge the PR

FROM node:20.18.0

WORKDIR /app

# Install dependencies (this step is cached as long as the dependencies don't change)
COPY package.json pnpm-lock.yaml ./

RUN corepack enable pnpm && pnpm install

# Copy the rest of your app's source code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

CMD [ "pnpm", "run", "dev", "--host" ]