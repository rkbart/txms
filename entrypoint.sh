#!/bin/bash
set -e

# Remove pre-existing server PID file
rm -f /txms/tmp/pids/server.pid

exec "$@"

