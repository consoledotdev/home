#!/bin/bash

if [[ $1 =~ ^(([1-9]?[0-9]|1[0-9][0-9]|2([0-4][0-9]|5[0-5]))\.){3}([1-9]?[0-9]|1[0-9][0-9]|2([0-4][0-9]|5[0-5]))$ ]]; then
  hugo server --buildDrafts --bind=$1 --baseURL=http://$1:1313
else
  hugo server --buildDrafts
fi
