import { useState, useEffect } from "react";
import WordDisplay from "../WordDisplay/WordDisplay";
import Keyboard from "../Keyboard/Keyboard";
import ResetButton from "../ResetButton/ResetButton";
import ThemeButton from "../ThemeButton/ThemeButton";
import LanguageButton from "../LanguageButton/LanguageButton";
import Illustration from "../Illustration/Illustration";
import words from "../../data/words.json";
import "./Game.scss";

const Game = () => {
  const [selectedWord, setSelectedWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [mistakes, setMistakes] = useState(0);
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    resetGame();
  }, [language]);

  const resetGame = () => {
    const randomWord =
      words[language][Math.floor(Math.random() * words[language].length)];
    setSelectedWord(randomWord);
    setGuessedLetters(new Set());
    setMistakes(0);
  };

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

  const isWinner = () => {
    return selectedWord.split("").every((letter) => guessedLetters.has(letter));
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "pl" : "en";
    setLanguage(newLanguage);
  };

  return (
    <div className={`game ${theme}`}>
      <div className="header-buttons">
        <ThemeButton onClick={handleThemeToggle} currentTheme={theme} />
        <LanguageButton
          onClick={handleLanguageToggle}
          currentLanguage={language}
        />
      </div>
      <h1>Hangman</h1>
      <Illustration mistakes={mistakes} />
      <WordDisplay
        selectedWord={selectedWord}
        guessedLetters={guessedLetters}
      />
      <Keyboard guessedLetters={guessedLetters} onClick={handleLetterClick} />
      <div className="game-footer">
        {isWinner() ? <p className="win-message">Great!</p> : null}
        {mistakes >= 6 ? (
          <p className="lose-message">
            You lost. <br /> The correct word is: {selectedWord}
          </p>
        ) : null}
        <ResetButton onClick={resetGame} />
      </div>
    </div>
  );
};

export default Game;
