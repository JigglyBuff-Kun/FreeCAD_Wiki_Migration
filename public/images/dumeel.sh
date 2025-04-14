for f in *; do
    new_name=$(echo "$f" | sed 's/File://; s/ /_/g')
    mv "$f" "$new_name"
done
