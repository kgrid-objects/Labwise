#!/usr/bin/env sh
# clean up only leaving zip files
rm -r *.zip
cd collection
# create one big zip of all kos
# create zip for each ko

for d in * ; do
    echo "$d.zip"
    zip -r -X "../$d.zip" $d -x \"*.DS_Store\"
done

zip -r -X ../labwise-all.zip * -x \"*.DS_Store\" "*.zip*"
