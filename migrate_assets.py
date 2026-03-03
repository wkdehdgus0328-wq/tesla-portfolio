import os
import re
import shutil

html_path = r'c:\Users\cob\Desktop\취업자료26\지원서\테슬라 지원서\테슬라 포트폴리오.html'
old_ref_base = r'c:\Users\cob\Desktop\취업자료26\레퍼런스'
assets_dir = r'c:\Users\cob\Desktop\취업자료26\지원서\테슬라 지원서\assets'

if not os.path.exists(assets_dir):
    os.makedirs(assets_dir)

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# find exactly src="../../레퍼런스/anything.png"
matches = re.findall(r'src="\.\./\.\./레퍼런스/([^"]+)"', content)
print(f"Found {len(matches)} occurrences.")

for relative_path in matches:
    # relative_path is something like "경력 레퍼런스/스탠리 블랙앤데커 레퍼런스1.png"
    old_file_path = os.path.join(old_ref_base, relative_path.replace('/', '\\'))
    
    # Generate a safe flat filename. Replace spaces with underscores or just keep the basename
    # Keep basename
    filename = os.path.basename(relative_path)
    new_file_path = os.path.join(assets_dir, filename)
    
    print(f"Copying {old_file_path} to {new_file_path}")
    if os.path.exists(old_file_path):
        shutil.copy2(old_file_path, new_file_path)
    else:
        print(f"File not found: {old_file_path}")

    old_src = f'src="../../레퍼런스/{relative_path}"'
    new_src = f'src="./assets/{filename}"'
    content = content.replace(old_src, new_src)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Done.")
