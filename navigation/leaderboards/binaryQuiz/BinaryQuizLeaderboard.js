import { pythonURI, fetchOptions } from '../../../assets/js/api/config.js';

function sortScoresDescending(scores) {
  return scores.sort((a, b) => b.user_score - a.user_score);
}

async function fetchScores() {
  try {
    const scoresResponse = await fetch(`${pythonURI}/api/quizgrading`, fetchOptions);
    if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
    const scores = await scoresResponse.json();
    return sortScoresDescending(scores);
  } catch (error) {
    console.error('Error fetching scores:', error);
    return [];
  }
}

function displayScores(scores, tableId) {
  const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Clear existing rows

  scores.forEach((score) => {
    const row = tableBody.insertRow();
    const usernameCell = row.insertCell(0);
    const scoreCell = row.insertCell(1);
    usernameCell.textContent = score.username;
    scoreCell.textContent = score.user_score;
  });
}

async function loadAndDisplayScores() {
  const scores = await fetchScores();
  if (scores) {
    displayScores(scores, 'Leaderboard');
  }
}

// Run when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  loadAndDisplayScores();
});