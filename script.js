const quotes = [
    "Believe in yourself!",
    "Stay positive.",
    "Never give up.",
    "The sky is the limit.",
    "Dream big, work hard.",
    "You are stronger than you think.",
    "Keep pushing forward.",
    "Success is no accident.",
    "The best time is now.",
    "Think big, start small."
  ];
  
  const container = document.getElementById("quoteContainer");
  
  // Function to generate tiles
  function generateTiles() {
    container.innerHTML = ""; // Clear existing tiles
    for (let i = 0; i < 12; i++) {
      const tile = document.createElement("div");
      tile.className = "quote-tile";
      tile.textContent = getRandomQuote();
      container.appendChild(tile);
    }
  }
  
  // Function to get a random quote
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  // Update tiles every 3 seconds
  setInterval(generateTiles, 3000);
  
  // Generate initial tiles
  generateTiles();
  