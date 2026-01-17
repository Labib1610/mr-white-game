# 🎭 Mr. White - The Ultimate Deception Game

A beautiful, web-based party game where players try to identify the imposters among them through clever clues and deduction!

## 🎮 Live Demo

**Play Now:** [https://labib1610.github.io/mr-white-game/](https://labib1610.github.io/mr-white-game/)

## 📖 Game Overview

**Mr. White** is a social deduction game where:
- **Civilians** all share the same secret word (e.g., "Pizza")
- **Mr. White** gets **NO WORD AT ALL** - must figure it out from clues!
- **Undercovers** (optional) get a different but related word (e.g., "Pasta")
- Players give 1-2 word clues and vote to eliminate imposters
- Mr. White can win by guessing the civilian word when caught!

## 🎯 How to Play

### Setup
1. Select 4-10 players and start the game
2. Each player privately views their word one by one
3. **IMPORTANT**: Mr. White sees "NO WORD" - they must figure it out!

### Gameplay
1. **Round Start**: A random player begins, continue clockwise
2. **Give Clues**: Each player gives a 1-2 word clue about their word
   - Civilians: Be specific enough for others but not too obvious for Mr. White
   - Mr. White: Give vague clues that could apply to anything
   - Undercover: Give clues about your word, not the civilian word
3. **Discussion**: After all clues, discuss who seems suspicious
4. **Vote**: Point at who you think is Mr. White or Undercover
5. **Elimination**: Player with most votes is eliminated

### If Mr. White is Caught:
- Mr. White gets **ONE chance** to guess the civilian word
- ✅ **Correct guess** = Mr. White wins instantly!
- ❌ **Wrong guess** = Civilians win!

### If Wrong Person is Eliminated:
- They're out of the game
- Continue with new round of clues for the same word
- Repeat until Mr. White is found

### Special Rule:
🎭 **Mr. White can reveal themselves at ANY time to guess the word!**

### Win Conditions:
- **Civilians win**: Eliminate all imposters (Mr. White + Undercovers)
- **Mr. White wins**: Survive as last person OR correctly guess the word when caught
- **Undercovers win**: If only one civilian remains

## 🎲 Role Distribution

- **4-5 players**: 1 Mr. White, 0-1 Undercover, rest Civilians
- **6-8 players**: 1 Mr. White, 1-2 Undercovers, rest Civilians
- **9-10 players**: 1 Mr. White, 2 Undercovers, rest Civilians

## ✨ Features

- 🎨 Beautiful, modern UI with gradient animations
- 📱 Fully responsive - works on mobile, tablet, and desktop
- 🔒 Private word viewing (one player at a time)
- 🎯 **180+ curated word pairs** with themed categories
- ❌ **Mr. White gets NO WORD** - must deduce from clues!
- 🗳️ Built-in voting and elimination system
- 🎭 Role reveal functionality
- ♻️ Quick restart for multiple rounds
- 🎲 Flexible role distribution (scalable undercover system)

## 📂 Files

- `index.html` - Main game structure
- `styles.css` - Beautiful responsive styling
- `script.js` - Game logic and word pairs (100+ pairs!)

## 🚀 Deployment Instructions

### Deploy to GitHub Pages:

1. **Create a new repository** on GitHub:
   - Go to [github.com](https://github.com)
   - Click "New Repository"
   - Name it: `mr-white-game`
   - Make it public
   - Click "Create repository"

2. **Upload the files**:
   - Upload `index.html`, `styles.css`, `script.js`, and `README.md`
   - Or use Git commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Labib1610/mr-white-game.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes

4. **Access your game**:
   - Your game will be live at: `https://labib1610.github.io/mr-white-game/`
   - Share this link with friends!

## 🎨 Word Categories

The game includes 180+ word pairs across multiple themed categories:
- 🍕 Food & Cuisine (35 pairs)
- 🦁 Animals (35 pairs)
- 💻 Technology (30 pairs)
- ⚽ Sports & Games (30 pairs)
- 🎬 Entertainment (25 pairs)
- 🏖️ Places (25 pairs)
- 👨‍⚕️ Professions (20 pairs)
- 🚗 Vehicles (15 pairs)

## 🎯 Tips for Playing

**For Civilians:**
- Give clues that are specific enough for other civilians but not obvious for Mr. White
- Listen carefully - if someone's clues seem off, they might be an imposter
- Don't make your clues too obvious or Mr. White will learn the word!
- Work together with other civilians to identify patterns

**For Mr. White:**
- Give intentionally vague clues that could apply to many things
- Listen carefully to all clues to deduce the word
- Mimic the style and confidence of other players
- You can reveal yourself at ANY time to guess the word!
- If you're confident, take the risk and guess early
- Even if caught, you still have a chance to win by guessing correctly

**For Undercovers:**
- Give clues about YOUR word, not the civilian word
- Be subtle - you want to survive longer than Mr. White  
- Try to blend in while still being truthful about your word
- Use strategic voting to your advantage

## 📱 Mobile Friendly

The game is fully optimized for mobile devices! Perfect for:
- Playing in person with friends
- Virtual game nights
- Party gatherings
- Team building activities

## 🔧 Customization

Want to add more word pairs? Edit `script.js` and add to the `wordPairs` array:

```javascript
{ civilian: "Your Word", mrWhite: "Related Word", undercover: "Another Related Word" }
```

## 🐛 Troubleshooting

**Game not loading?**
- Make sure all three files (HTML, CSS, JS) are in the same folder
- Check browser console for errors (F12)

**GitHub Pages not working?**
- Wait a few minutes after enabling Pages
- Make sure the repository is public
- Check that `index.html` is in the root directory

## 📝 License

Free to use and modify for personal and educational purposes!

## 🎉 Credits

Created for fun game nights and social gatherings!

---

**Enjoy the game!** 🎭🎮

Report issues or suggestions: [GitHub Issues](https://github.com/Labib1610/mr-white-game/issues)
