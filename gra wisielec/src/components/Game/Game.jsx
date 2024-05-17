import { useState, useEffect } from "react";
import WordDisplay from "../WordDisplay/WordDisplay";
import Keyboard from "../Keyboard/Keyboard";
import ResetButton from "../ResetButton/ResetButton";
import words from "../../data/words.json";

const Game = () => {
  const [selectedWord, setSelectedWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {};

  const handleLetterClick = (letter) => {
    const lowercaseLetter = letter.toLowerCase();
    if (!guessedLetters.has(lowercaseLetter)) {
      const newGuessedLetters = new Set(guessedLetters);
      newGuessedLetters.add(lowercaseLetter);
      setGuessedLetters(newGuessedLetters);

      if (!selectedWord.includes(lowercaseLetter)) {
        setMistakes(mistakes + 1);
      }
    }
  };

  const isWinner = () => {};

  return (
    <div className="game">
      <h1>Hangman</h1>
      <WordDisplay
        selectedWord={selectedWord}
        guessedLetters={guessedLetters}
      />
      <Keyboard guessedLetters={guessedLetters} onClick={handleLetterClick} />
      <div className="game-footer">
        {isWinner() ? <p className="win-message">Great!</p> : null}
        {mistakes >= 6 ? (
          <p className="lose-message">
            You lost.<p> The correct word is: {selectedWord}</p>
          </p>
        ) : null}
        <ResetButton onClick={resetGame} />
      </div>
    </div>
  );
};

export default Game;
