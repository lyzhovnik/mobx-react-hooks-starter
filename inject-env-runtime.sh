#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "Expected 1 argument"
  exit 1
fi

# Input / Output file name
FILE=$1

# Loop through every key=value pair received from the `env` command
# piped through this shell script
env | grep "REACT_APP_.*=.*" | while read p; do
  key="$(echo "$p" | cut -d'=' -f1)"
  value="$(echo "$p" | cut -d'=' -f2)"
  echo "Substituting ${key} with \"${value}\" in ${FILE}"
  sed -i.bak -e "s~RUNTIME_ENV_${key}~${value}~g" $FILE
done

# Check that there is no remaining RUNTIME_ENV_ occurences in the file
remaining=$(cat $FILE | grep "RUNTIME_ENV_" | wc -l)

if [ "$remaining" -ne 0 ]; then
  echo "Error: $remaining runtime frontend environment variables have not been replaced"
  cat $FILE | grep "REACT_APP_"
  exit 1
fi
