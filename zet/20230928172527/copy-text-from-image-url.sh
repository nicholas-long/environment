#!/bin/bash
# copy and read text from PNG image URL arg print with tesseract OCR

which tesseract >/dev/null 2>/dev/null
if [ $? -ne 0 ]; then
  echo "install tesseract to run this script"
  exit 1
fi

tf=$(mktemp -d)
cd $tf
wget $1
filename=$(ls)
tesseract "$filename" output
ls
cat output.txt
cd - >/dev/null
rm -rf $tf
