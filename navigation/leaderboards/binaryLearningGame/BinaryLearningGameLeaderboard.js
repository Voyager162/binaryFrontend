import { pythonURI, javaURI, fetchOptions, login } from '../../../assets/js/api/config.js';
async function readBinaryGameScores() {
  try {
 
    const scoresResponse = await fetch(`${pythonURI}/api/binaryLearningGameScores`, fetchOptions);
    if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
    const scores = await scoresResponse.json();

    return(scores);

  } catch (error) {
    console.error('Error fetching scores:', error);
    return null;
  }
}

 
async function readBinaryQuizScores() {
    try {
   
      const scoresResponse = await fetch(`${pythonURI}/api/quizgrading`, fetchOptions);
      if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
      const scores = await scoresResponse.json();
  
      return(scores);
  
    } catch (error) {
      console.error('Error fetching scores:', error);
      return null;
    }
  }