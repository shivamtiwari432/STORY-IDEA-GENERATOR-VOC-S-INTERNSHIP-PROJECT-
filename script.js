// Multiple story templates for variety
const templates = [
  (g, t, c) => `In a ${g} world, where ${t.toLowerCase()} drives fate, ${c} must make a choice that changes everything.`,
  (g, t, c) => `A ${g} story of ${c}, entangled in a journey filled with ${t.toLowerCase()} and hidden truths.`,
  (g, t, c) => `Set in a ${g} universe, ${c} discover that ${t.toLowerCase()} is both their greatest strength and their deepest curse.`,
  (g, t, c) => `Within the realm of ${g}, ${c} face unexpected challenges where ${t.toLowerCase()} holds the key to survival.`,
  (g, t, c) => `This ${g} tale unfolds with ${c} whose destiny is intertwined with the power of ${t.toLowerCase()}.`
];

// Generate story
function generateIdea() {
  const genre = document.getElementById("genre").value;
  const theme = document.getElementById("theme").value;
  const characters = document.getElementById("characters").value || "mysterious strangers";

  // Pick random template
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  const story = randomTemplate(genre, theme, characters);

  const output = `
    <h2>✨ Generated Story Idea</h2>
    <p><b>Genre:</b> ${genre}</p>
    <p><b>Theme:</b> ${theme}</p>
    <p><b>Main Characters:</b> ${characters}</p>
    <p><b>Idea:</b> ${story}</p>
  `;

  document.getElementById("output").innerHTML = output;
  addToHistory(story);
}

// Surprise random story
function generateRandom() {
  const randomGenres = ["Fantasy", "Sci-Fi", "Romance", "Horror", "Mystery", "Adventure"];
  const randomThemes = ["Hope", "Betrayal", "Love", "Survival", "Destiny", "Secrets"];
  const randomChars = ["a brave knight", "two lovers", "a lost child", "a hacker", "an alien traveler"];

  const genre = randomGenres[Math.floor(Math.random() * randomGenres.length)];
  const theme = randomThemes[Math.floor(Math.random() * randomThemes.length)];
  const characters = randomChars[Math.floor(Math.random() * randomChars.length)];

  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  const story = randomTemplate(genre, theme, characters);

  document.getElementById("output").innerHTML = `
    <h2>🎲 Random Story Idea</h2>
    <p><b>Genre:</b> ${genre}</p>
    <p><b>Theme:</b> ${theme}</p>
    <p><b>Main Characters:</b> ${characters}</p>
    <p><b>Idea:</b> ${story}</p>
  `;
  addToHistory(story);
}

// Add to history
function addToHistory(story) {
  const historyList = document.getElementById("history");
  const li = document.createElement("li");
  li.innerText = story;
  historyList.prepend(li); // latest on top
}
