#!/bin/bash

current_dir=$(pwd)

# Set the source directory
src_dir="$current_dir/src"

# check if the src directory exists
if [ ! -d "$src_dir" ]; then
  echo "The source directory does not exist."
  exit 1
fi

# check if the output directory exists
if [ ! -d "$output_dir" ]; then
  echo "The output directory does not exist."
  exit 1
fi

# Set the output directory
output_dir="$current_dir/dist"

# check if the dist directory exists
if [ ! -d "$output_dir" ]; then
  echo "The dist directory does not exist."
  exit 1
fi

# Loop through each .ejs file in the source directory
for file in "$src_dir"/*.ejs; do
  # Get the filename without the extension
  filename=$(basename "$file" .ejs)
  
  # Create the output directory if it doesn't exist
  mkdir -p "$output_dir/$filename"
  
  # Build the .ejs file using the ejs package
  node_modules/.bin/ejs "$file" -o "$output_dir/$filename/index.html"
done

# Copy the assets directory to the output directory
cp -r "$src_dir/assets" "$output_dir/assets"