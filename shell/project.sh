#!/bin/bash    
# ---------------------------------------------------------------------------
# project.sh - a shell script to open and update projects

# Copyright 2015, Steve Sinnwell <steve@kopfwelt.com>

# Usage: install.sh [-h|--help] [-q|--quiet] [-s|--root] [script]

# Revision history:
# 2015-01-03  Created
# ---------------------------------------------------------------------------

SCRIPT_PATH=$(cd `dirname "${BASH_SOURCE[0]}"` && pwd)/`basename "${BASH_SOURCE[0]}"`
PROJECT_PATH="$(dirname $(dirname $SCRIPT_PATH))"
PROJECT_NAME=`perl -nle'print $1 if m{.*"name": *"(.*?)",}' $PROJECT_PATH/package.json`

echo "Changing to project path:"
echo $PROJECT_PATH

cd $PROJECT_PATH
open ./
open -a /Applications/Sublime\ Text.app/ ./



# Code template for parsing command line parameters using only portable shell
# code, while handling both long and short params, handling '-f file' and
# '-f=file' style param data and also capturing non-parameters to be inserted
# back into the shell positional parameters.


# A POSIX variable
OPTIND=1         # Reset in case getopts has been used previously in the shell.

# Initialize our own variables:
START=false
UPDATE=false

while getopts "su?:" opt; do
    case "$opt" in
    s)  START=true
        ;;
    u)  UPDATE=true
        ;;
    esac
done

shift $((OPTIND-1))

[ "$1" = "--" ] && shift



if  [ "$UPDATE" == true ]; then
  bundle install
  npm install
fi

if  [ "$START" == true ]; then
  gulp
fi

notification='display notification "Project update is done" with title "' 
notification+=$PROJECT_NAME
notification+='"'
osascript -e "$notification"