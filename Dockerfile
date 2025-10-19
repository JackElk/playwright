# 1. Use official Playwright image (already includes Node, browsers, deps)
FROM mcr.microsoft.com/playwright:v1.55.1-jammy

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy your project files into container
COPY package*.json ./
RUN npm ci

# Copy the rest of the source files into the image.
COPY . .

# 4. Run Playwright tests by default
CMD ["npx", "playwright", "test", "--reporter=html", "--output=test-results", "--quiet"]
