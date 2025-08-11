#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /txms/tmp/pids/server.pid

# Run any pending initializers (like your CSV setup)
# This ensures it runs every time the container starts
if [ -f "/txms/config/initializers/csv_setup.rb" ]; then
  echo "Running CSV setup initializer..."
  bundle exec rails runner "require './config/initializers/csv_setup.rb'"
fi

# Then exec the container's main process
exec "$@"
