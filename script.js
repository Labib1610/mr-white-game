// Enhanced Word Pairs - 180+ thematic word pairs
// IMPORTANT: Mr. White gets NO WORD! Only Civilians and Undercovers get words
const wordPairs = [
    // Food & Cuisine (35 pairs)
    { civilian: "Pizza", undercover: "Pasta" },
    { civilian: "Sushi", undercover: "Ramen" },
    { civilian: "Burger", undercover: "Sandwich" },
    { civilian: "Coffee", undercover: "Tea" },
    { civilian: "Chocolate", undercover: "Candy" },
    { civilian: "Ice Cream", undercover: "Gelato" },
    { civilian: "Steak", undercover: "Ribs" },
    { civilian: "Salad", undercover: "Coleslaw" },
    { civilian: "Taco", undercover: "Burrito" },
    { civilian: "Pancake", undercover: "Waffle" },
    { civilian: "Donut", undercover: "Croissant" },
    { civilian: "Soup", undercover: "Stew" },
    { civilian: "Bread", undercover: "Toast" },
    { civilian: "Cheese", undercover: "Butter" },
    { civilian: "Bacon", undercover: "Sausage" },
    { civilian: "Noodles", undercover: "Rice" },
    { civilian: "Curry", undercover: "Stir Fry" },
    { civilian: "Dumpling", undercover: "Wonton" },
    { civilian: "Kebab", undercover: "Shawarma" },
    { civilian: "Omelet", undercover: "Scrambled Eggs" },
    { civilian: "Popcorn", undercover: "Chips" },
    { civilian: "Cookie", undercover: "Biscuit" },
    { civilian: "Cake", undercover: "Pie" },
    { civilian: "Milkshake", undercover: "Smoothie" },
    { civilian: "Wine", undercover: "Beer" },
    { civilian: "Juice", undercover: "Soda" },
    { civilian: "Honey", undercover: "Maple Syrup" },
    { civilian: "Peanut Butter", undercover: "Nutella" },
    { civilian: "Pickles", undercover: "Olives" },
    { civilian: "Ketchup", undercover: "Mustard" },
    { civilian: "Fries", undercover: "Onion Rings" },
    { civilian: "Lasagna", undercover: "Ravioli" },
    { civilian: "Croissant", undercover: "Bagel" },
    { civilian: "Cheesecake", undercover: "Tiramisu" },
    { civilian: "Hot Chocolate", undercover: "Latte" },
    
    // Animals (35 pairs)
    { civilian: "Lion", undercover: "Tiger" },
    { civilian: "Dog", undercover: "Wolf" },
    { civilian: "Eagle", undercover: "Hawk" },
    { civilian: "Dolphin", undercover: "Whale" },
    { civilian: "Horse", undercover: "Zebra" },
    { civilian: "Elephant", undercover: "Rhino" },
    { civilian: "Butterfly", undercover: "Moth" },
    { civilian: "Snake", undercover: "Lizard" },
    { civilian: "Cat", undercover: "Panther" },
    { civilian: "Rabbit", undercover: "Hare" },
    { civilian: "Penguin", undercover: "Puffin" },
    { civilian: "Gorilla", undercover: "Chimpanzee" },
    { civilian: "Kangaroo", undercover: "Wallaby" },
    { civilian: "Owl", undercover: "Crow" },
    { civilian: "Bear", undercover: "Grizzly" },
    { civilian: "Shark", undercover: "Orca" },
    { civilian: "Crocodile", undercover: "Alligator" },
    { civilian: "Bee", undercover: "Wasp" },
    { civilian: "Ant", undercover: "Termite" },
    { civilian: "Spider", undercover: "Scorpion" },
    { civilian: "Frog", undercover: "Toad" },
    { civilian: "Turtle", undercover: "Tortoise" },
    { civilian: "Parrot", undercover: "Macaw" },
    { civilian: "Peacock", undercover: "Phoenix" },
    { civilian: "Flamingo", undercover: "Crane" },
    { civilian: "Deer", undercover: "Moose" },
    { civilian: "Giraffe", undercover: "Camel" },
    { civilian: "Hippo", undercover: "Walrus" },
    { civilian: "Ostrich", undercover: "Emu" },
    { civilian: "Goldfish", undercover: "Koi" },
    { civilian: "Monkey", undercover: "Baboon" },
    { civilian: "Seal", undercover: "Sea Lion" },
    { civilian: "Koala", undercover: "Sloth" },
    { civilian: "Fox", undercover: "Coyote" },
    { civilian: "Beaver", undercover: "Otter" },
    
    // Technology (30 pairs)
    { civilian: "iPhone", undercover: "Android" },
    { civilian: "Laptop", undercover: "Tablet" },
    { civilian: "Facebook", undercover: "Instagram" },
    { civilian: "Netflix", undercover: "YouTube" },
    { civilian: "PlayStation", undercover: "Xbox" },
    { civilian: "Wi-Fi", undercover: "Bluetooth" },
    { civilian: "Camera", undercover: "GoPro" },
    { civilian: "Email", undercover: "Text Message" },
    { civilian: "Twitter", undercover: "TikTok" },
    { civilian: "Zoom", undercover: "Skype" },
    { civilian: "Google", undercover: "Bing" },
    { civilian: "Chrome", undercover: "Safari" },
    { civilian: "Windows", undercover: "MacOS" },
    { civilian: "Alexa", undercover: "Siri" },
    { civilian: "USB Drive", undercover: "SD Card" },
    { civilian: "Mouse", undercover: "Trackpad" },
    { civilian: "Keyboard", undercover: "Touchscreen" },
    { civilian: "Monitor", undercover: "TV Screen" },
    { civilian: "Printer", undercover: "Scanner" },
    { civilian: "Router", undercover: "Modem" },
    { civilian: "Smartwatch", undercover: "Fitness Band" },
    { civilian: "Drone", undercover: "RC Helicopter" },
    { civilian: "VR Headset", undercover: "AR Glasses" },
    { civilian: "Podcast", undercover: "Audiobook" },
    { civilian: "Cloud Storage", undercover: "Hard Drive" },
    { civilian: "WhatsApp", undercover: "Telegram" },
    { civilian: "Spotify", undercover: "Apple Music" },
    { civilian: "Reddit", undercover: "Discord" },
    { civilian: "LinkedIn", undercover: "Indeed" },
    { civilian: "PayPal", undercover: "Venmo" },
    
    // Sports & Games (30 pairs)
    { civilian: "Football", undercover: "Rugby" },
    { civilian: "Basketball", undercover: "Volleyball" },
    { civilian: "Tennis", undercover: "Badminton" },
    { civilian: "Chess", undercover: "Checkers" },
    { civilian: "Swimming", undercover: "Diving" },
    { civilian: "Yoga", undercover: "Pilates" },
    { civilian: "Marathon", undercover: "Sprint" },
    { civilian: "Boxing", undercover: "Wrestling" },
    { civilian: "Golf", undercover: "Mini Golf" },
    { civilian: "Cricket", undercover: "Baseball" },
    { civilian: "Hockey", undercover: "Lacrosse" },
    { civilian: "Skiing", undercover: "Snowboarding" },
    { civilian: "Surfing", undercover: "Wakeboarding" },
    { civilian: "Rock Climbing", undercover: "Bouldering" },
    { civilian: "Karate", undercover: "Judo" },
    { civilian: "Fencing", undercover: "Kendo" },
    { civilian: "Poker", undercover: "Blackjack" },
    { civilian: "Monopoly", undercover: "Scrabble" },
    { civilian: "Darts", undercover: "Bowling" },
    { civilian: "Billiards", undercover: "Snooker" },
    { civilian: "Archery", undercover: "Crossbow" },
    { civilian: "Cycling", undercover: "Mountain Biking" },
    { civilian: "Rowing", undercover: "Kayaking" },
    { civilian: "Gymnastics", undercover: "Acrobatics" },
    { civilian: "Figure Skating", undercover: "Ice Dancing" },
    { civilian: "Ping Pong", undercover: "Table Tennis" },
    { civilian: "Softball", undercover: "Baseball" },
    { civilian: "Paintball", undercover: "Laser Tag" },
    { civilian: "Uno", undercover: "Crazy Eights" },
    { civilian: "Jenga", undercover: "Blocks" },
    
    // Entertainment (25 pairs)
    { civilian: "Movie", undercover: "TV Show" },
    { civilian: "Concert", undercover: "Festival" },
    { civilian: "Theater", undercover: "Opera" },
    { civilian: "Party", undercover: "Wedding" },
    { civilian: "Comedy", undercover: "Stand-up" },
    { civilian: "Magic Show", undercover: "Circus" },
    { civilian: "Dance Club", undercover: "Disco" },
    { civilian: "Museum", undercover: "Art Gallery" },
    { civilian: "Carnival", undercover: "Fair" },
    { civilian: "Karaoke", undercover: "Open Mic" },
    { civilian: "DJ", undercover: "Live Band" },
    { civilian: "Nightclub", undercover: "Bar" },
    { civilian: "Casino", undercover: "Arcade" },
    { civilian: "Amusement Park", undercover: "Water Park" },
    { civilian: "Zoo", undercover: "Safari" },
    { civilian: "Broadway", undercover: "Musical" },
    { civilian: "Documentary", undercover: "Reality Show" },
    { civilian: "Anime", undercover: "Cartoon" },
    { civilian: "Video Game", undercover: "Board Game" },
    { civilian: "Photography", undercover: "Videography" },
    { civilian: "Halloween Party", undercover: "Costume Party" },
    { civilian: "Escape Room", undercover: "Puzzle Room" },
    { civilian: "Talent Show", undercover: "Competition" },
    { civilian: "Drive-in Theater", undercover: "IMAX" },
    { civilian: "Improv", undercover: "Sketch Comedy" },
    
    // Places (25 pairs)
    { civilian: "Beach", undercover: "Lake" },
    { civilian: "Mountain", undercover: "Hill" },
    { civilian: "Desert", undercover: "Tundra" },
    { civilian: "Forest", undercover: "Jungle" },
    { civilian: "City", undercover: "Town" },
    { civilian: "Airport", undercover: "Train Station" },
    { civilian: "Hospital", undercover: "Clinic" },
    { civilian: "School", undercover: "University" },
    { civilian: "Restaurant", undercover: "Cafe" },
    { civilian: "Hotel", undercover: "Motel" },
    { civilian: "Library", undercover: "Bookstore" },
    { civilian: "Bank", undercover: "Credit Union" },
    { civilian: "Mall", undercover: "Market" },
    { civilian: "Gym", undercover: "Fitness Center" },
    { civilian: "Park", undercover: "Garden" },
    { civilian: "Church", undercover: "Temple" },
    { civilian: "Bridge", undercover: "Tunnel" },
    { civilian: "Skyscraper", undercover: "Tower" },
    { civilian: "Castle", undercover: "Palace" },
    { civilian: "Pyramid", undercover: "Monument" },
    { civilian: "Office", undercover: "Cubicle" },
    { civilian: "Stadium", undercover: "Arena" },
    { civilian: "Lighthouse", undercover: "Watchtower" },
    { civilian: "Warehouse", undercover: "Factory" },
    { civilian: "Cottage", undercover: "Cabin" },
    
    // Professions (20 pairs)
    { civilian: "Doctor", undercover: "Nurse" },
    { civilian: "Teacher", undercover: "Professor" },
    { civilian: "Chef", undercover: "Baker" },
    { civilian: "Pilot", undercover: "Flight Attendant" },
    { civilian: "Artist", undercover: "Designer" },
    { civilian: "Musician", undercover: "Singer" },
    { civilian: "Engineer", undercover: "Architect" },
    { civilian: "Police", undercover: "Detective" },
    { civilian: "Lawyer", undercover: "Judge" },
    { civilian: "Firefighter", undercover: "Paramedic" },
    { civilian: "Farmer", undercover: "Gardener" },
    { civilian: "Mechanic", undercover: "Electrician" },
    { civilian: "Programmer", undercover: "Hacker" },
    { civilian: "Writer", undercover: "Journalist" },
    { civilian: "Actor", undercover: "Model" },
    { civilian: "Dentist", undercover: "Orthodontist" },
    { civilian: "Scientist", undercover: "Researcher" },
    { civilian: "Photographer", undercover: "Videographer" },
    { civilian: "Waiter", undercover: "Bartender" },
    { civilian: "Plumber", undercover: "Carpenter" },
    
    // Vehicles (15 pairs)
    { civilian: "Car", undercover: "Truck" },
    { civilian: "Motorcycle", undercover: "Scooter" },
    { civilian: "Airplane", undercover: "Jet" },
    { civilian: "Train", undercover: "Subway" },
    { civilian: "Boat", undercover: "Yacht" },
    { civilian: "Bicycle", undercover: "Tricycle" },
    { civilian: "Helicopter", undercover: "Drone" },
    { civilian: "Bus", undercover: "Van" },
    { civilian: "Ambulance", undercover: "Fire Truck" },
    { civilian: "Taxi", undercover: "Uber" },
    { civilian: "Limousine", undercover: "SUV" },
    { civilian: "Rocket", undercover: "Spaceship" },
    { civilian: "Skateboard", undercover: "Rollerblades" },
    { civilian: "Jet Ski", undercover: "Speedboat" },
    { civilian: "Hot Air Balloon", undercover: "Blimp" },
];

// Game State
let gameState = {
    playerCount: 0,
    currentPlayer: 0,
    roles: [],
    selectedWordPair: null,
    eliminatedPlayers: [],
    playerNames: [],
    config: {
        mrWhiteCount: 1,
        includeUndercover: true,
        undercoverCount: 0,
        showRoleDistribution: true,
        enableAnimations: true
    }
};

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const playerNamesScreen = document.getElementById('playerNamesScreen');
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
    
    // Initialize player names with defaults
    gameState.playerNames = [];
    for (let i = 0; i < gameState.playerCount; i++) {
        gameState.playerNames.push(`Player ${i + 1}`);
    }
    
    // Show player naming screen
    generatePlayerNamesForm();
    switchScreen(playerNamesScreen);
}

// Generate player names input form
function generatePlayerNamesForm() {
    const form = document.getElementById('playerNamesForm');
    form.innerHTML = '';
    
    for (let i = 0; i < gameState.playerCount; i++) {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'player-name-input';
        inputGroup.innerHTML = `
            <label>Player ${i + 1}</label>
            <input type="text" 
                   id="playerName${i}" 
                   placeholder="Player ${i + 1}" 
                   value="Player ${i + 1}"
                   maxlength="20">
        `;
        form.appendChild(inputGroup);
    }
}

// Save player names and continue
function savePlayerNames() {
    for (let i = 0; i < gameState.playerCount; i++) {
        const input = document.getElementById(`playerName${i}`);
        const name = input.value.trim();
        gameState.playerNames[i] = name || `Player ${i + 1}`;
    }
    startWordDistribution();
}

// Skip naming and use defaults
function skipNaming() {
    startWordDistribution();
}

// Start word distribution phase
function startWordDistribution() {
    // Select random word pair
    gameState.selectedWordPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    
    // Assign roles based on player count
    gameState.roles = assignRoles(gameState.playerCount);
    gameState.currentPlayer = 0;
    gameState.eliminatedPlayers = [];
    
    // Show role distribution
    if (gameState.config.showRoleDistribution) {
        const roleInfo = getRoleDistributionText();
        document.getElementById('roleInfo').textContent = roleInfo;
    } else {
        document.getElementById('roleInfo').textContent = 'Role distribution hidden';
    }
    
    switchScreen(distributionScreen);
    updatePlayerDisplay();
}

function assignRoles(playerCount) {
    let roles = [];
    
    // Determine undercover count based on config and player count
    let undercoverCount = 0;
    if (gameState.config.includeUndercover) {
        if (playerCount >= 4 && playerCount <= 5) {
            undercoverCount = Math.random() < 0.5 ? 1 : 0;
        } else if (playerCount >= 6 && playerCount <= 8) {
            undercoverCount = Math.random() < 0.5 ? 1 : 2;
        } else if (playerCount >= 9) {
            undercoverCount = 2;
        }
    }
    
    gameState.config.undercoverCount = undercoverCount;
    
    // Assign Mr. White roles (1 or more based on config)
    let mrWhiteIndices = [];
    while (mrWhiteIndices.length < gameState.config.mrWhiteCount) {
        let randomIndex = Math.floor(Math.random() * playerCount);
        if (!mrWhiteIndices.includes(randomIndex)) {
            mrWhiteIndices.push(randomIndex);
        }
    }
    
    // Assign undercover roles
    let undercoverIndices = [];
    while (undercoverIndices.length < undercoverCount) {
        let randomIndex = Math.floor(Math.random() * playerCount);
        if (!mrWhiteIndices.includes(randomIndex) && !undercoverIndices.includes(randomIndex)) {
            undercoverIndices.push(randomIndex);
        }
    }
    
    // Create role array - CRITICAL: MR. WHITE GETS NO WORD!
    for (let i = 0; i < playerCount; i++) {
        if (mrWhiteIndices.includes(i)) {
            roles.push({ role: 'Mr. White', word: '' });  // NO WORD FOR MR. WHITE!
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
    const mrWhites = gameState.roles.filter(r => r.role === 'Mr. White').length;
    
    let text = `👥 ${civilians} Civilians`;
    if (undercovers > 0) {
        text += ` | 🕵️ ${undercovers} Undercover${undercovers !== 1 ? 's' : ''}`;
    }
    text += ` | 🎭 ${mrWhites} Mr. White${mrWhites !== 1 ? 's' : ''}`;
    
    return text;
}

function updatePlayerDisplay() {
    const playerNum = gameState.currentPlayer + 1;
    const playerName = gameState.playerNames[gameState.currentPlayer];
    document.getElementById('currentPlayerNumber').textContent = playerName;
    document.getElementById('progressText').textContent = `${playerName} (${playerNum} of ${gameState.playerCount})`;
    
    // Reset display
    document.getElementById('wordDisplay').classList.add('hidden');
    document.getElementById('hideWordBtn').classList.add('hidden');
    document.getElementById('revealWordBtn').classList.remove('hidden');
}

function revealWord() {
    const currentRole = gameState.roles[gameState.currentPlayer];
    
    // MR. WHITE GETS NO WORD - CRITICAL FEATURE!
    if (currentRole.role === 'Mr. White') {
        document.getElementById('secretWord').textContent = '❓ NO WORD';
        document.getElementById('roleLabel').textContent = '(You are Mr. White! Figure out the word!)';
        document.getElementById('secretWord').style.color = '#FF6584';
    } else {
        // Civilians and Undercovers DON'T see their role - they just see the word
        // This prevents Undercovers from being self-conscious!
        document.getElementById('secretWord').textContent = currentRole.word;
        document.getElementById('roleLabel').textContent = '(Your Secret Word)';
        document.getElementById('secretWord').style.color = '#4CAF50';
    }
    
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
    document.getElementById('roleCount').textContent = `${gameState.config.mrWhiteCount} Mr. White + ${others - gameState.config.mrWhiteCount} Other${others - gameState.config.mrWhiteCount !== 1 ? 's' : ''}`;
    
    // Create player list with custom names
    const playerList = document.getElementById('playerList');
    playerList.innerHTML = '';
    
    for (let i = 0; i < gameState.playerCount; i++) {
        const playerItem = document.createElement('div');
        playerItem.className = 'player-item';
        playerItem.innerHTML = `
            <span>${gameState.playerNames[i]}</span>
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
    const playerName = gameState.playerNames[index];
    
    if (role === 'Mr. White') {
        setTimeout(() => {
            const guess = prompt(`🎭 ${playerName} is Mr. White!\n\nMr. White can now guess the civilian word to win!\n\nYour guess:`);
            if (guess && guess.toLowerCase() === gameState.selectedWordPair.civilian.toLowerCase()) {
                alert(`🎉 Mr. White wins! The correct word was "${gameState.selectedWordPair.civilian}"!\n\n${playerName} successfully guessed the word!`);
            } else {
                alert(`❌ Wrong guess! The word was "${gameState.selectedWordPair.civilian}".\n\nCivilians win! 👥`);
            }
        }, 500);
    } else if (role === 'Undercover') {
        alert(`🕵️ ${playerName} was an Undercover!\n\nTheir word was "${gameState.roles[index].word}"\n\nGame continues!`);
    } else {
        alert(`😢 ${playerName} was a Civilian!\n\nAn innocent person was eliminated. Be more careful!`);
    }
}

function showRoles() {
    const revealContent = document.getElementById('revealContent');
    revealContent.innerHTML = '';
    
    // Add game summary
    const summary = document.createElement('div');
    summary.style.cssText = 'background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 25px; text-align: center;';
    summary.innerHTML = `
        <h3 style="color: #6C63FF; margin-bottom: 10px;">Game Summary</h3>
        <p style="font-size: 1.2em;"><strong>Civilian Word:</strong> <span style="color: #4CAF50;">"${gameState.selectedWordPair.civilian}"</span></p>
        <p style="font-size: 1.2em;"><strong>Undercover Word:</strong> <span style="color: #FFA726;">"${gameState.selectedWordPair.undercover}"</span></p>
        <p style="font-size: 1.2em;"><strong>Mr. White Word:</strong> <span style="color: #EF5350;">NO WORD</span></p>
    `;
    revealContent.appendChild(summary);
    
    for (let i = 0; i < gameState.playerCount; i++) {
        const role = gameState.roles[i];
        const eliminated = gameState.eliminatedPlayers.includes(i) ? ' (Eliminated)' : '';
        const playerName = gameState.playerNames[i];
        
        const playerReveal = document.createElement('div');
        playerReveal.className = `reveal-player ${role.role.toLowerCase().replace(' ', '-').replace('.', '')}`;
        playerReveal.innerHTML = `
            <div>
                <div class="reveal-player-name">${playerName}${eliminated}</div>
                <div class="reveal-word">${role.word ? `"${role.word}"` : '❓ NO WORD'}</div>
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
        eliminatedPlayers: [],
        playerNames: [],
        config: {
            mrWhiteCount: gameState.config.mrWhiteCount || 1,
            includeUndercover: gameState.config.includeUndercover !== false,
            undercoverCount: 0,
            showRoleDistribution: gameState.config.showRoleDistribution !== false,
            enableAnimations: gameState.config.enableAnimations !== false
        }
    };
    
    playerButtons.forEach(btn => btn.classList.remove('selected'));
    startGameBtn.disabled = true;
    
    switchScreen(welcomeScreen);
}

function switchScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
    
    // Add animation class if enabled
    if (gameState.config.enableAnimations) {
        screen.classList.add('slide-in');
        setTimeout(() => screen.classList.remove('slide-in'), 500);
    }
}

// Modal Functions
function openRulesModal() {
    document.getElementById('rulesModal').style.display = 'block';
}

function closeRulesModal() {
    document.getElementById('rulesModal').style.display = 'none';
}

function openSettingsModal() {
    // Load current settings
    document.getElementById('includeUndercoverToggle').checked = gameState.config.includeUndercover;
    document.getElementById('mrWhiteCount').value = gameState.config.mrWhiteCount;
    document.getElementById('showRoleDistribution').checked = gameState.config.showRoleDistribution;
    document.getElementById('enableAnimations').checked = gameState.config.enableAnimations;
    
    document.getElementById('settingsModal').style.display = 'block';
}

function closeSettingsModal() {
    document.getElementById('settingsModal').style.display = 'none';
}

function updateSettings() {
    gameState.config.includeUndercover = document.getElementById('includeUndercoverToggle').checked;
    gameState.config.mrWhiteCount = parseInt(document.getElementById('mrWhiteCount').value);
    gameState.config.showRoleDistribution = document.getElementById('showRoleDistribution').checked;
    gameState.config.enableAnimations = document.getElementById('enableAnimations').checked;
}

function showPlayerListModal() {
    let playerList = 'Current Players:\n\n';
    for (let i = 0; i < gameState.playerCount; i++) {
        const status = gameState.eliminatedPlayers.includes(i) ? ' ☠️ (Eliminated)' : ' ✅';
        playerList += `${i + 1}. ${gameState.playerNames[i]}${status}\n`;
    }
    alert(playerList);
}

// Close modals when clicking outside
window.onclick = function(event) {
    const rulesModal = document.getElementById('rulesModal');
    const settingsModal = document.getElementById('settingsModal');
    
    if (event.target === rulesModal) {
        closeRulesModal();
    }
    if (event.target === settingsModal) {
        closeSettingsModal();
    }
}

// Initialize
console.log('🎭 Mr. White Game Loaded!');
console.log(`📚 ${wordPairs.length} word pairs available`);
console.log('⚠️ IMPORTANT: Mr. White gets NO WORD!');
console.log('✨ New features: Player naming, Rules modal, Settings, and more!');
