import random
import os
import time

# Clear screen function for terminal
def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

# Word pairs (Secret Word, Vague Word for Mr. White)
word_pairs = [
    ("Hospital", "Clinic"), ("Apple", "Cheery"), ("Teacher", "Student"), ("Computer", "Laptop"),
    ("Football", "Sport"), ("Ocean", "Water"), ("Library", "Books"), ("Mountain", "Hill"),
    ("Pencil", "Stationery"), ("Phone", "Device"), ("Tiger", "Animal"), ("Car", "Vehicle"),
    ("Pizza", "Food"), ("School", "Institution"), ("Plane", "Aircraft"), ("Chair", "Furniture"),
    ("Clock", "Time"), ("Camera", "Device"), ("Rain", "Weather"), ("Train", "Transport"),
    ("Chocolate", "Sweet"), ("Bed", "Furniture"), ("Doctor", "Profession"), ("Book", "Read"),
    ("Guitar", "Instrument"), ("River", "Water"), ("Movie", "Entertainment"), ("Shirt", "Clothing"),
    ("Mirror", "Reflection"), ("Sun", "Star"), ("Pen", "Write"), ("Bicycle", "Transport"),
    ("Snow", "Cold"), ("Fire", "Hot"), ("Cake", "Dessert"), ("Milk", "Drink"),
    ("Garden", "Plants"), ("Fan", "Cooler"), ("Dog", "Pet"), ("Flag", "Country"),
    ("Police", "Law"), ("School", "Learning"), ("Ball", "Round"), ("Brush", "Paint"),
    ("Zoo", "Animals"), ("Butterfly", "Insect"), ("Banana", "Fruit"), ("House", "Home"),
    ("Road", "Path"), ("Key", "Lock"), ("Wallet", "Money"), ("Helmet", "Safety"),
    ("Beach", "Sand"), ("Lion", "King"), ("Bottle", "Water"), ("Ladder", "Climb"),
    ("Candle", "Light"), ("Clock", "Tick"), ("Scissors", "Cut"), ("Egg", "Protein")
]

def play_mr_white():
    secret_word, vague_word = random.choice(word_pairs)
    mr_white_index = random.randint(0, 3)

    print("\n🎮 Mr. White Game Started!\n")
    for i in range(4):
        input(f"👤 Player {i+1}, press Enter to see your word...")
        if i == mr_white_index:
            print(f"🤫 Your word is: {vague_word} (You're Mr. White!)")
        else:
            print(f"✅ Your word is: {secret_word}")
        input("🔒 Press Enter again to hide your word...")
        clear_terminal()
    
    print("🗣️ All players have seen their words. Let the discussion begin!\n")

if __name__ == "__main__":
    while True:
        play_mr_white()
        again = input("🔁 Do you want to play another round? (y/n): ")
        if again.lower() != 'y':
            print("👋 Game ended. Thanks for playing!")
            break
        clear_terminal()