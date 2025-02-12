import { pythonURI, javaURI, fetchOptions, login } from '../../assets/js/api/config.js';

const scoresApi = `${pythonURI}/api/general/guizgrading`;

async function getHighestScore() {
  try {
    const scoresResponse = await fetch(scoresApi, fetchOptions);
    if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
    const scores = await scoresResponse.json();

    const highestScore = scores.length > 0 ? Math.max(...scores.map((entry) => entry.user_score)) : 0;

    updateHighScoreDisplay();
  } catch (error) {
    console.error('Error fetching scores:', error);
  }
}

// Function to sort players by score in descending order
function sortLeaderboard(players) {
  return players.sort((a, b) => b.score - a.score);
}

// Function to display the leaderboard
function displayLeaderboard(players) {
  console.log('Leaderboard:');
  players.forEach((player, index) => {
      console.log(`${index + 1}. ${player.name} - ${player.score} points`);
  });
}

window.onload = function () {
  // Sort and display the leaderboard
  const sortedPlayers = sortLeaderboard(players);
  displayLeaderboard(sortedPlayers);
};

// Function to update the high score display (assuming this function exists)
function updateHighScoreDisplay(highestScore) {
    console.log(`Highest Score: ${highestScore}`);
  }