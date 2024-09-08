#!/bin/bash

# Function to blur and resize an image
blur_and_resize() {
  input_file="$1"
  output_file="$2"
  magick "$input_file" -resize x5 -quality 100% "$output_file"
}

# Function to encode an image as base64
encode_base64() {
  input_file="$1"
  base64_encoded=$(base64 --input "$input_file")
  echo "$base64_encoded"
}

# Function to process a folder
process_folder() {
  folder="$1"
  yaml_file="$2"

  # Iterate over all subfolders
  for subfolder in "$folder"/*; do
    if [ -d "$subfolder" ]; then
      subfolder_name=$(basename "$subfolder")
      images=()

      # Find all pictures in the subfolder
      while IFS= read -r -d '' image; do
        images+=("$image")
      done < <(find "$subfolder" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)

      # Process each image and add it to the YAML file
      if [ ${#images[@]} -gt 0 ]; then
        echo "$subfolder_name:" >> "$yaml_file"
        for ((i=0; i<${#images[@]}; i++)); do
          image="${images[$i]}"
          image_name=$(basename "$image")
          blurred_image="${image%.*}_blur.${image##*.}"
          blur_and_resize "$image" "$blurred_image"
          encoded_blurred_image=$(encode_base64 "$blurred_image")
          image_name="${image_name%.*}"
          echo "  $image_name: $encoded_blurred_image" >> "$yaml_file"
          rm "$blurred_image" # Remove the blurred image
        done
      fi
    fi
  done
}

# Main script
if [ $# -ne 2 ]; then
  echo "Usage: $0 <folder> <output_yaml>"
  exit 1
fi

folder="$1"
output_yaml="$2"

# Create an empty YAML file
echo "" > "$output_yaml"

# Process the folder and generate the YAML file
process_folder "$folder" "$output_yaml"