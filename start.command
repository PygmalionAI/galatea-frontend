#!/bin/bash

branch="dev"

git pull origin "$branch"

if [[ -n $(git status -s) ]]; then
    osascript -e 'display dialog "Conflicts detected with remote repo. Please resolve them before continuing." with title "Error" buttons {"OK"} default button 1'
    exit 1
fi

npm install
npm run dev