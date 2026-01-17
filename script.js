// Enhanced Word Pairs - More thematic and related words
const wordPairs = [
    // Food & Cuisine
    { civilian: "Pizza", mrWhite: "Pasta", undercover: "Lasagna" },
    { civilian: "Sushi", mrWhite: "Ramen", undercover: "Tempura" },
    { civilian: "Burger", mrWhite: "Sandwich", undercover: "Hot Dog" },
    { civilian: "Coffee", mrWhite: "Tea", undercover: "Espresso" },
    { civilian: "Chocolate", mrWhite: "Candy", undercover: "Caramel" },
    { civilian: "Ice Cream", mrWhite: "Gelato", undercover: "Frozen Yogurt" },
    { civilian: "Steak", mrWhite: "Beef", undercover: "Ribs" },
    { civilian: "Salad", mrWhite: "Vegetables", undercover: "Coleslaw" },
    
    // Animals
    { civilian: "Lion", mrWhite: "Tiger", undercover: "Leopard" },
    { civilian: "Dog", mrWhite: "Wolf", undercover: "Fox" },
    { civilian: "Eagle", mrWhite: "Hawk", undercover: "Falcon" },
    { civilian: "Dolphin", mrWhite: "Whale", undercover: "Shark" },
    { civilian: "Horse", mrWhite: "Donkey", undercover: "Zebra" },
    { civilian: "Elephant", mrWhite: "Rhino", undercover: "Hippo" },
    { civilian: "Butterfly", mrWhite: "Moth", undercover: "Dragonfly" },
    { civilian: "Snake", mrWhite: "Python", undercover: "Cobra" },
    
    // Technology
    { civilian: "iPhone", mrWhite: "Smartphone", undercover: "Android" },
    { civilian: "Laptop", mrWhite: "Computer", undercover: "Tablet" },
    { civilian: "Facebook", mrWhite: "Social Media", undercover: "Instagram" },
    { civilian: "Netflix", mrWhite: "Streaming", undercover: "YouTube" },
    { civilian: "PlayStation", mrWhite: "Console", undercover: "Xbox" },
    { civilian: "Wi-Fi", mrWhite: "Internet", undercover: "Bluetooth" },
    { civilian: "Camera", mrWhite: "DSLR", undercover: "GoPro" },
    { civilian: "Email", mrWhite: "Message", undercover: "Gmail" },
    
    // Sports & Games
    { civilian: "Football", mrWhite: "Soccer", undercover: "Rugby" },
    { civilian: "Basketball", mrWhite: "Sport", undercover: "Volleyball" },
    { civilian: "Tennis", mrWhite: "Racket", undercover: "Badminton" },
    { civilian: "Chess", mrWhite: "Board Game", undercover: "Checkers" },
    { civilian: "Swimming", mrWhite: "Pool", undercover: "Diving" },
    { civilian: "Yoga", mrWhite: "Exercise", undercover: "Pilates" },
    { civilian: "Marathon", mrWhite: "Running", undercover: "Sprint" },
    { civilian: "Boxing", mrWhite: "Fighting", undercover: "Wrestling" },
    
    // Entertainment
    { civilian: "Movie", mrWhite: "Film", undercover: "Cinema" },
    { civilian: "Concert", mrWhite: "Music", undercover: "Festival" },
    { civilian: "Theater", mrWhite: "Stage", undercover: "Opera" },
    { civilian: "Party", mrWhite: "Celebration", undercover: "Birthday" },
    { civilian: "Comedy", mrWhite: "Funny", undercover: "Stand-up" },
    { civilian: "Magic Show", mrWhite: "Illusion", undercover: "Circus" },
    { civilian: "Dance", mrWhite: "Ballet", undercover: "Hip Hop" },
    { civilian: "Museum", mrWhite: "Art", undercover: "Gallery" },
    
    // Places
    { civilian: "Beach", mrWhite: "Ocean", undercover: "Seaside" },
    { civilian: "Mountain", mrWhite: "Hill", undercover: "Peak" },
    { civilian: "Desert", mrWhite: "Sand", undercover: "Sahara" },
    { civilian: "Forest", mrWhite: "Trees", undercover: "Jungle" },
    { civilian: "City", mrWhite: "Urban", undercover: "Metropolis" },
    { civilian: "Airport", mrWhite: "Terminal", undercover: "Runway" },
    { civilian: "Hospital", mrWhite: "Clinic", undercover: "Emergency" },
    { civilian: "School", mrWhite: "Education", undercover: "University" },
    
    // Professions
    { civilian: "Doctor", mrWhite: "Surgeon", undercover: "Physician" },
    { civilian: "Teacher", mrWhite: "Educator", undercover: "Professor" },
    { civilian: "Chef", mrWhite: "Cook", undercover: "Baker" },
    { civilian: "Pilot", mrWhite: "Aviator", undercover: "Captain" },
    { civilian: "Artist", mrWhite: "Painter", undercover: "Sculptor" },
    { civilian: "Musician", mrWhite: "Singer", undercover: "Guitarist" },
    { civilian: "Engineer", mrWhite: "Developer", undercover: "Architect" },
    { civilian: "Police", mrWhite: "Officer", undercover: "Detective" },
    
    // Vehicles
    { civilian: "Car", mrWhite: "Automobile", undercover: "Sedan" },
    { civilian: "Motorcycle", mrWhite: "Bike", undercover: "Scooter" },
    { civilian: "Airplane", mrWhite: "Aircraft", undercover: "Jet" },
    { civilian: "Train", mrWhite: "Railway", undercover: "Subway" },
    { civilian: "Boat", mrWhite: "Ship", undercover: "Yacht" },
    { civilian: "Bicycle", mrWhite: "Cycle", undercover: "BMX" },
    { civilian: "Helicopter", mrWhite: "Chopper", undercover: "Drone" },
    { civilian: "Bus", mrWhite: "Transit", undercover: "Coach" },
    
    // Nature
    { civilian: "Sun", mrWhite: "Star", undercover: "Solar" },
    { civilian: "Moon", mrWhite: "Lunar", undercover: "Crescent" },
    { civilian: "Rain", mrWhite: "Water", undercover: "Storm" },
    { civilian: "Snow", mrWhite: "Ice", undercover: "Blizzard" },
    { civilian: "Rainbow", mrWhite: "Colors", undercover: "Spectrum" },
    { civilian: "Thunder", mrWhite: "Lightning", undercover: "Storm" },
    { civilian: "Volcano", mrWhite: "Lava", undercover: "Eruption" },
    { civilian: "Earthquake", mrWhite: "Tremor", undercover: "Seismic" },
    
    // Objects
    { civilian: "Watch", mrWhite: "Clock", undercover: "Timer" },
    { civilian: "Glasses", mrWhite: "Spectacles", undercover: "Sunglasses" },
    { civilian: "Umbrella", mrWhite: "Parasol", undercover: "Raincoat" },
    { civilian: "Mirror", mrWhite: "Reflection", undercover: "Glass" },
    { civilian: "Pen", mrWhite: "Writing", undercover: "Pencil" },
    { civilian: "Book", mrWhite: "Novel", undercover: "Magazine" },
    { civilian: "Guitar", mrWhite: "Instrument", undercover: "Piano" },
    { civilian: "Ball", mrWhite: "Sphere", undercover: "Football" },
    
    // Seasons & Holidays
    { civilian: "Christmas", mrWhite: "Holiday", undercover: "New Year" },
    { civilian: "Halloween", mrWhite: "Costume", undercover: "Trick-or-Treat" },
    { civilian: "Summer", mrWhite: "Season", undercover: "Vacation" },
    { civilian: "Winter", mrWhite: "Cold", undercover: "Skiing" },
    { civilian: "Spring", mrWhite: "Flowers", undercover: "Bloom" },
    { civilian: "Autumn", mrWhite: "Fall", undercover: "Leaves" },
    { civilian: "Easter", mrWhite: "Eggs", undercover: "Bunny" },
    { civilian: "Birthday", mrWhite: "Cake", undercover: "Party" },
];

// Game State
let gameState = {
    playerCount: 0,
    currentPlayer: 0,
    roles: [],
    selectedWordPair: null,
    eliminatedPlayers: []
};

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const distributionScreen = document.getElementById('distributionScreen');
const gamePlayScreen = document.getElementById('gamePlayScreen');
const revealScreen = document.getElementById('revealScreen');

const playerButtons = document.querySelectorAll('.player-btn');
const startGameBtn = document.getElementById('startGameBtn');
const revealWordBtn = document.getElementById('revealWordBtn');
const hideWordBtn = document.getElementById('hideWordBtn');
const showRolesBtn = document.getElementById('showRolesBtn');
const newGameBtn = document.getElementById('newGameBtn');
const newGameBtn2 = document.getElementById('newGameBtn2');
const backToGameBtn = document.getElementById('backToGameBtn');

// Event Listeners
playerButtons.forEach(btn => {
    btn.addEventListener('click', () => selectPlayerCount(parseInt(btn.dataset.count)));
});

startGameBtn.addEventListener('click', startGame);
revealWordBtn.addEventListener('click', revealWord);
hideWordBtn.addEventListener('click', hideWord);
showRolesBtn.addEventListener('click', showRoles);
newGameBtn.addEventListener('click', resetGame);
newGameBtn2.addEventListener('click', resetGame);
backToGameBtn.addEventListener('click', () => {
    switchScreen(gamePlayScreen);
});

// Functions
function selectPlayerCount(count) {
    gameState.playerCount = count;
    
    playerButtons.forEach(btn => {
        if (parseInt(btn.dataset.count) === count) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
    
    startGameBtn.disabled = false;
}

function startGame() {
    if (gameState.playerCount < 4) return;
    
    // Select random word pair
    gameState.selectedWordPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    
    // Assign roles based on player count
    gameState.roles = assignRoles(gameState.playerCount);
    gameState.currentPlayer = 0;
    gameState.eliminatedPlayers = [];
    
    // Show role distribution
    const roleInfo = getRoleDistributionText();
    document.getElementById('roleInfo').textContent = roleInfo;
    
    switchScreen(distributionScreen);
    updatePlayerDisplay();
}

function assignRoles(playerCount) {
    let roles = [];
    let mrWhiteIndex = Math.floor(Math.random() * playerCount);
    let undercoverCount = 0;
    
    // Determine undercover count based on player count
    if (playerCount >= 4 && playerCount <= 5) {
        undercoverCount = Math.random() < 0.5 ? 1 : 0; // 50% chance of 1 undercover
    } else if (playerCount >= 6 && playerCount <= 8) {
        undercoverCount = Math.random() < 0.5 ? 1 : 2; // 1 or 2 undercovers
    } else if (playerCount >= 9) {
        undercoverCount = 2; // Always 2 undercovers for 9-10 players
    }
    
    // Assign undercover roles
    let undercoverIndices = [];
    while (undercoverIndices.length < undercoverCount) {
        let randomIndex = Math.floor(Math.random() * playerCount);
        if (randomIndex !== mrWhiteIndex && !undercoverIndices.includes(randomIndex)) {
            undercoverIndices.push(randomIndex);
        }
    }
    
    // Create role array
    for (let i = 0; i < playerCount; i++) {
        if (i === mrWhiteIndex) {
            roles.push({ role: 'Mr. White', word: gameState.selectedWordPair.mrWhite });
        } else if (undercoverIndices.includes(i)) {
            roles.push({ role: 'Undercover', word: gameState.selectedWordPair.undercover });
        } else {
            roles.push({ role: 'Civilian', word: gameState.selectedWordPair.civilian });
        }
    }
    
    return roles;
}

function getRoleDistributionText() {
    const civilians = gameState.roles.filter(r => r.role === 'Civilian').length;
    const undercovers = gameState.roles.filter(r => r.role === 'Undercover').length;
    
    return `👥 ${civilians} Civilians | 🕵️ ${undercovers} Undercover${undercovers !== 1 ? 's' : ''} | 🎭 1 Mr. White`;
}

function updatePlayerDisplay() {
    const playerNum = gameState.currentPlayer + 1;
    document.getElementById('currentPlayerNumber').textContent = `Player ${playerNum}`;
    document.getElementById('progressText').textContent = `Player ${playerNum} of ${gameState.playerCount}`;
    
    // Reset display
    document.getElementById('wordDisplay').classList.add('hidden');
    document.getElementById('hideWordBtn').classList.add('hidden');
    document.getElementById('revealWordBtn').classList.remove('hidden');
}

function revealWord() {
    const currentRole = gameState.roles[gameState.currentPlayer];
    
    document.getElementById('secretWord').textContent = currentRole.word;
    document.getElementById('roleLabel').textContent = `(${currentRole.role})`;
    
    document.getElementById('wordDisplay').classList.remove('hidden');
    document.getElementById('revealWordBtn').classList.add('hidden');
    document.getElementById('hideWordBtn').classList.remove('hidden');
}

function hideWord() {
    gameState.currentPlayer++;
    
    if (gameState.currentPlayer < gameState.playerCount) {
        updatePlayerDisplay();
    } else {
        startGamePlay();
    }
}

function startGamePlay() {
    switchScreen(gamePlayScreen);
    
    // Update game info
    document.getElementById('totalPlayers').textContent = gameState.playerCount;
    const civilians = gameState.roles.filter(r => r.role === 'Civilian').length;
    document.getElementById('civilianCount').textContent = civilians;
    const others = gameState.playerCount - civilians;
    document.getElementById('roleCount').textContent = `1 Mr. White + ${others - 1} Other${others - 1 !== 1 ? 's' : ''}`;
    
    // Create player list
    const playerList = document.getElementById('playerList');
    playerList.innerHTML = '';
    
    for (let i = 0; i < gameState.playerCount; i++) {
        const playerItem = document.createElement('div');
        playerItem.className = 'player-item';
        playerItem.innerHTML = `
            <span>Player ${i + 1}</span>
            <button class="eliminate-btn" onclick="eliminatePlayer(${i})">❌ Eliminate</button>
        `;
        playerList.appendChild(playerItem);
    }
}

function eliminatePlayer(index) {
    if (gameState.eliminatedPlayers.includes(index)) return;
    
    gameState.eliminatedPlayers.push(index);
    
    const playerItems = document.querySelectorAll('.player-item');
    playerItems[index].classList.add('eliminated');
    playerItems[index].querySelector('.eliminate-btn').disabled = true;
    playerItems[index].querySelector('.eliminate-btn').textContent = '☠️ Eliminated';
    
    const role = gameState.roles[index].role;
    
    if (role === 'Mr. White') {
        setTimeout(() => {
            const guess = prompt(`Mr. White has been found! 🎭\n\nMr. White, guess the civilian word to win!\n\nYour guess:`);
            if (guess && guess.toLowerCase() === gameState.selectedWordPair.civilian.toLowerCase()) {
                alert(`🎉 Mr. White wins! The correct word was "${gameState.selectedWordPair.civilian}"!`);
            } else {
                alert(`❌ Wrong guess! The word was "${gameState.selectedWordPair.civilian}". Civilians win! 👥`);
            }
        }, 500);
    } else {
        alert(`Player ${index + 1} was ${role === 'Undercover' ? 'an Undercover! 🕵️' : 'a Civilian! 😢'}`);
    }
}

function showRoles() {
    const revealContent = document.getElementById('revealContent');
    revealContent.innerHTML = '';
    
    for (let i = 0; i < gameState.playerCount; i++) {
        const role = gameState.roles[i];
        const eliminated = gameState.eliminatedPlayers.includes(i) ? ' (Eliminated)' : '';
        
        const playerReveal = document.createElement('div');
        playerReveal.className = `reveal-player ${role.role.toLowerCase().replace(' ', '-')}`;
        playerReveal.innerHTML = `
            <div>
                <div class="reveal-player-name">Player ${i + 1}${eliminated}</div>
                <div class="reveal-word">"${role.word}"</div>
            </div>
            <div class="reveal-role">${role.role}</div>
        `;
        revealContent.appendChild(playerReveal);
    }
    
    switchScreen(revealScreen);
}

function resetGame() {
    gameState = {
        playerCount: 0,
        currentPlayer: 0,
        roles: [],
        selectedWordPair: null,
        eliminatedPlayers: []
    };
    
    playerButtons.forEach(btn => btn.classList.remove('selected'));
    startGameBtn.disabled = true;
    
    switchScreen(welcomeScreen);
}

function switchScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// Initialize
console.log('🎭 Mr. White Game Loaded!');
console.log(`📚 ${wordPairs.length} word pairs available`);
