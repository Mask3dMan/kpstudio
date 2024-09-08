#!/bin/bash

# Function to calculate the average color of an image
calculate_average_color() {
  input_file="$1"
  average_color=$(magick "$input_file" -scale 1x1\! -format "%[pixel:u]" info:-)
  echo "${average_color:1}"
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
          average_color=$(calculate_average_color "$image")
          image_name="${image_name%.*}"
          echo "  $image_name: $average_color" >> "$yaml_file"
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
