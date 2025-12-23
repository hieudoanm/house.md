import csv
import json
from pathlib import Path

INPUT_CSV = "csv/apps.csv"
OUTPUT_JSON = "json/apps.json"

data = []

with open(INPUT_CSV, newline="", encoding="utf-8") as csv_file:
    reader = csv.DictReader(csv_file)

    for row in reader:
        # Convert "tags" from "a,b,c" → ["a", "b", "c"]
        row["tags"] = [tag.strip() for tag in row["tags"].split(",") if tag.strip()]
        data.append(row)

with open(OUTPUT_JSON, "w", encoding="utf-8") as json_file:
    json.dump(data, json_file, indent=2, ensure_ascii=False)

print(f"Converted {len(data)} rows → {OUTPUT_JSON}")
