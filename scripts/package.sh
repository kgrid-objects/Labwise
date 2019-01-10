#!/usr/bin/env sh
# clean up only leaving zip files
rm -r *.zip
cd collection
# create one big zip of all kos
zip -r -X ../labwise-all.zip * -x \"*.DS_Store\" "*.zip*"
