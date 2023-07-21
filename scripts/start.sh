#!/bin/bash

branch="dev"

git pull origin "$branch"

if [[ -n $(git status -s) ]]; then
    echo "Conflicts detected with remote repo. Please resolve them before continuing."
    exit 1
fi

npm install
npm run dev
