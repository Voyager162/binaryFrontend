import { pythonURI, fetchOptions } from '../../../assets/js/api/config.js';

// Sort the scores in descending order
function sortScoresDescending(scores) {
  return scores.sort((a, b) => b.user_score - a.user_score);
}

async function fetchScores() {
    try {
      const scoresResponse = await fetch(`${pythonURI}/api/quizgrading`, fetchOptions);
      if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
      
      const scores = await scoresResponse.json();
      console.log('Raw API response:', scores); // Debug: Log the complete response
      
      // Update the field names to match the API response
      const formattedScores = scores.map(score => ({
        username: score.attempt, // Using attempt field for username
        user_score: score.quizgrade // Using quizgrade field for score
      }));
      
      console.log('Formatted scores:', formattedScores); // Debug: Log the formatted data
      
      return sortScoresDescending(formattedScores);
    } catch (error) {
      console.error('Error fetching scores:', error);
      return [];
    }
}  

  function displayScores(scores, tableId) {
    console.log('Displaying scores:', scores); // Debug: Log the scores
    
    const table = document.getElementById(tableId);
    if (!table) {
        console.error(`Table with ID '${tableId}' not found`);
        return;
    }
    
    const tableBody = table.getElementsByTagName('tbody')[0];
    if (!tableBody) {
        console.error(`No tbody found in table with ID '${tableId}'`);
        return;
    }
    
    tableBody.innerHTML = ''; // Clear existing rows
    
    if (scores.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="2">No scores available</td></tr>';
        return;
    }

    scores.forEach((score, index) => {
        console.log(`Creating row ${index}:`, score); // Debug: Log each score as it's processed
        const row = tableBody.insertRow();
        const usernameCell = row.insertCell(0);
        const scoreCell = row.insertCell(1);
        
        // Add null checks
        usernameCell.textContent = score.username || 'Unknown';
        scoreCell.textContent = score.user_score ?? 'N/A';
    });
  }

  async function loadAndDisplayScores() {
    const scores = await fetchScores();
    if (scores && scores.length > 0) {
      displayScores(scores, 'Leaderboard'); // Use a single leaderboard table
    } else {
      console.log('No scores available'); // Debug: Log if no scores are found
      const tableBody = document.getElementById('Leaderboard').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = '<tr><td colspan="2">No scores available</td></tr>'; // Show a message in the table
    }
  }
  

// Run when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Ensure the default tab is opened after the DOM is fully loaded
  document.getElementById("defaultOpen")?.click();

  // Set up the buttons to switch between tabs (if needed)
  const buttons = document.querySelectorAll('.tablink');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      showLeaderboard(); // Load and show leaderboard without filtering by level
    });
  });

  // Load scores when the page first loads
  loadAndDisplayScores();
});

// Function to show the leaderboard
function showLeaderboard() {
  const allTabs = document.querySelectorAll('.tabcontent');
  allTabs.forEach(tab => {
    tab.style.display = 'none';
  });

  // Show the 'Leaderboard' tab
  const activeTab = document.getElementById('Leaderboard'); // Use a generic leaderboard tab
  if (activeTab) {
    activeTab.style.display = 'block';
  } else {
    console.error('Leaderboard tab not found');
  }

  const buttons = document.querySelectorAll('.tablink');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // Optionally, highlight the active button (if you want to style it)
  const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase() === 'leaderboard');
  if (activeButton) {
    activeButton.classList.add('active');
  }
  
  loadAndDisplayScores(); // Load and display the scores for the selected level
}
