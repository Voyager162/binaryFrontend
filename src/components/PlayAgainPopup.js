import React from 'react';

const PlayAgainPopup = ({ onPlayAgain, onExit }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Do you want to play again?</h2>
        <button onClick={onPlayAgain}>Yes</button>
        <button onClick={onExit}>No</button>
      </div>
    </div>
  );
};

export default PlayAgainPopup;
