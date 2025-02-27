import { pythonURI, fetchOptions } from '../../../assets/js/api/config.js';

function sortScoresDescending(scores) {
  return scores.sort((a, b) => b.user_score - a.user_score);
}

function filterScoresForLevel(level, scores) {
  return scores.filter((entry) => entry.user_difficulty === level); // Match user_difficulty exactly
}

async function fetchScores() {
  try {
    const scoresResponse = await fetch(`${pythonURI}/api/binaryLearningGameScores`, fetchOptions);
    if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
    const scores = await scoresResponse.json();
    return sortScoresDescending(scores); // Sort scores in descending order by default
  } catch (error) {
    console.error('Error fetching scores:', error);
    return [];
  }
}

function displayScores(level, scores, tableId) {
  const filteredScores = filterScoresForLevel(level, scores);
  const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Clear existing rows

  filteredScores.forEach((score) => {
    const row = tableBody.insertRow();
    const usernameCell = row.insertCell(0);
    const scoreCell = row.insertCell(1);
    usernameCell.textContent = score.username;  // Correct field name for username
    scoreCell.textContent = score.user_score;  // Correct field name for score
  });
}

async function loadAndDisplayScores(level) {
  const scores = await fetchScores();
  if (scores) {
    displayScores(level, scores, `${level}Leaderboard`); // Use `level` directly for table id
  }
}

// Run when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Ensure the default tab is opened after the DOM is fully loaded
  document.getElementById("defaultOpen")?.click();

  // Set up the buttons to switch between levels
  const buttons = document.querySelectorAll('.tablink');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const level = button.textContent.toLowerCase(); // Convert to lowercase
      showLeaderboard(level); // Load and show leaderboard for selected level
    });
  });

  // Load scores for 'easy' by default when the page first loads
  loadAndDisplayScores('easy');
});

// Function to show the selected leaderboard
function showLeaderboard(level) {
  const allTabs = document.querySelectorAll('.tabcontent');
  allTabs.forEach(tab => {
    tab.style.display = 'none';
  });
  
  const activeTab = document.getElementById(level); // Use `level` directly (e.g., 'easy', 'medium')
  if (activeTab) {
    activeTab.style.display = 'block';
  } else {
    console.error(`Tab with id "${level}" not found`);
  }
  
  const buttons = document.querySelectorAll('.tablink');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  
  const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase() === level);
  activeButton.classList.add('active');
  
  loadAndDisplayScores(level); // Load and display the scores for the selected level
}
