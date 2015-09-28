#!/bin/bash    
# ---------------------------------------------------------------------------
# project.sh - a shell script to open and update projects

# Copyright 2015, Steve Sinnwell <steve@kopfwelt.com>

# Usage: install.sh [-h|--help] [-q|--quiet] [-s|--root] [script]

# Revision history:
# 2015-01-03  Created
# ---------------------------------------------------------------------------


# echo
# echo "------------------------------------------"
# echo "Running KOPFWELT project installing script"
# echo "------------------------------------------"
# echo
# echo "------------------------------------------"
# echo
# echo "Install gem packes? (Y|n)"
# read install_gem
# echo

# if  [ "$install_gem" == "n" ]; then
#   echo "Skipping"
# else
#   bundle install
# fi

# echo
# echo "------------------------------------------"
# echo
# echo "Install npm packes? (Y|n)"
# read install_npm
# echo

# if  [ "$install_npm" == "n" ]; then
#   echo "Skipping"
# else
#   npm install
# fi
echo moin
# [`alias | grep stack | wc -l` != 0] && echo "alias gefunden"
# [ `alias | grep stack | wc -l` != 0 ] && unalias stack

# if [ "$(alias | grep stack)" == "source /Users/stefansinnwell/Documents/Projekte/kopfwelt/stack-backbone/shell/project.sh" ]; then echo "mac user!";

# alias stack >/dev/null && echo "foo is set as an alias"

# echo
# echo "Install shortcut alias for project? (Y|n)"
# read install_shortcut
# echo
# if  [ "$install_shortcut" == "n" ]; then
#   echo "Skipping"
# else
#   project_path=$(pwd)
#   project_name=`perl -nle'print $1 if m{.*"name": *"(.*?)",}' ./package.json`
#   echo $project_name
#   echo "Shell alias? ($project_name)"
#   read install_shortcut
#   # if  [ "$install_npm" == "n" ]; then
# fi




# if [[ ! -s "$HOME/.bash_profile" && -s "$HOME/.profile" ]] ; then
#   profile_file="$HOME/.profile"
# else
#   profile_file="$HOME/.bash_profile"
# fi

# if ! grep -q 'astronavigation' "${profile_file}" ; then
#   echo "Editing ${profile_file} to load ~/.git-completioin.bash on Terminal launch"
#   # echo "source \"$HOME/.git-completion.bash\"" >> "${profile_file}"
#   echo "export $project_name='$project_path'" >> ~/.bash_profile
#   source ~/.bash_profile
# else
#   echo "Projectname($project_name) and projectpath already exists in $profile_file"
# fi

# echo $project_path
# cd $project_path



# eval cd "$PROJECT_NAME"
# cd $($PROJECT_NAME)
# source ~/.bash_profile

# open -a /Applications/Sublime\ Text.app/ ./
# open ./
# gulp

