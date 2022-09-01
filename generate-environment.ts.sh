#!/usr/bin/env bash

set -x
set -e

echo -e "import * as config from './env/$1';\nexport const configForCurrentEnv = config.default;" > src/config/environment.ts