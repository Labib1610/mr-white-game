# 🎭 Mr. White - The Ultimate Deception Game

A beautiful, web-based party game where players try to identify the imposters among them through clever clues and deduction!

## 🎮 Live Demo

**Play Now:** [https://labib1610.github.io/mr-white-game/](https://labib1610.github.io/mr-white-game/)

## 📖 Game Overview

**Mr. White** is a social deduction game where:
- **Civilians** share the same secret word
- **Mr. White** gets a different but related word
- **Undercovers** (optional) get yet another related word
- Players give clues and vote to eliminate imposters
- Mr. White can win by guessing the civilian word!

## 🎯 How to Play

1. **Setup**: Select 4-10 players and start the game
2. **Word Distribution**: Each player privately views their word
3. **Give Clues**: Players take turns giving one-word clues about their word
4. **Discussion**: Talk and figure out who has different words
5. **Vote**: Eliminate players you suspect are Mr. White or Undercover
6. **Win Conditions**:
   - **Civilians win**: Eliminate all imposters
   - **Mr. White wins**: Get eliminated but correctly guess the civilian word
   - **Undercovers win**: If only one civilian remains

## 🎲 Role Distribution

- **4-5 players**: 1 Mr. White, 0-1 Undercover, rest Civilians
- **6-8 players**: 1 Mr. White, 1-2 Undercovers, rest Civilians
- **9-10 players**: 1 Mr. White, 2 Undercovers, rest Civilians

## ✨ Features

- 🎨 Beautiful, modern UI with gradient animations
- 📱 Fully responsive - works on mobile, tablet, and desktop
- 🔒 Private word viewing (one player at a time)
- 🎯 100+ curated word pairs with themed categories
- 🗳️ Built-in voting and elimination system
- 🎭 Role reveal functionality
- ♻️ Quick restart for multiple rounds

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

The game includes 100+ word pairs across 13 themed categories:
- 🍕 Food & Cuisine
- 🦁 Animals
- 💻 Technology
- ⚽ Sports & Games
- 🎬 Entertainment
- 🏖️ Places
- 👨‍⚕️ Professions
- 🚗 Vehicles
- 🌤️ Nature
- 📱 Objects
- 🎄 Seasons & Holidays

## 🎯 Tips for Playing

**For Civilians:**
- Give clues that are specific but not too obvious
- Listen carefully to other players' clues
- Look for someone whose clues don't quite fit

**For Mr. White:**
- Give vague clues that could apply to many things
- Try to figure out the civilian word from their clues
- Blend in by mimicking the style of other clues

**For Undercovers:**
- Give clues about your word, not the civilian word
- Be subtle - you want to survive longer than Mr. White
- Use your elimination votes strategically

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
