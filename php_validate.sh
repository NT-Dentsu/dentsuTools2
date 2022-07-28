#!/usr/bin/env bash
THIS_SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$THIS_SCRIPT_DIR" || exit
./vendor/bin/sail php "$@"
return $?