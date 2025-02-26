from collections import Counter

def can_construct(ransom_note: str, magazine: str) -> bool:
    # Count the frequency of each character in ransom_note and magazine
    ransom_note_count = Counter(ransom_note)
    magazine_count = Counter(magazine)

    # Debug: Print the frequency counts (similar to console.log in JS)
    print("Ransom Note Count:", ransom_note_count)
    print("Magazine Count:", magazine_count)

    # Check if each character in ransom_note is available in magazine with sufficient frequency
    for char, count in ransom_note_count.items():
        if magazine_count.get(char, 0) < count:
            return False  # If any character is insufficient, return False

    return True  # If all characters are available, return True

# Test the function
print(can_construct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'))