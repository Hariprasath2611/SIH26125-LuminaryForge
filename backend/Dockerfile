FROM node:20-alpine AS base
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache libc6-compat

COPY package.json ./
RUN npm install

COPY . .

# Generate Prisma client
RUN npx prisma generate

EXPOSE 3001
ENV PORT=3001
ENV NODE_ENV=production

CMD ["npm", "run", "dev"]
