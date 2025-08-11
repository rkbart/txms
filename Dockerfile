# Stage 1: Base image
FROM ruby:3.4.1-slim AS base

WORKDIR /txms

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential \
    git \
    libyaml-dev \
    libvips \
    curl && \
    rm -rf /var/lib/apt/lists/*

# Stage 2: Install gems
FROM base AS build

COPY Gemfile Gemfile.lock ./
RUN bundle install && \
    rm -rf ~/.bundle/ "/usr/local/bundle"/ruby/*/cache

# Stage 3: Final app image
FROM base

COPY --from=build /usr/local/bundle /usr/local/bundle

# Copy the Rails app
COPY . .

# Add entrypoint script
COPY entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]

# Run Rails server
CMD ["rails", "server", "-b", "0.0.0.0"]
