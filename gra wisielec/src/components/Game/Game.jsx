import { useState } from "react";
import PropTypes from "prop-types";
import Illustration from "./Illustration";
import Keyboard from "./Keyboard";
import LanguageButton from "./LanguageButton";
import ThemeButton from "./ThemeButton";
import WordDisplay from "./WordDisplay";

const Game = () => {
  const [selectedWord, setSelectedWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  return (
    <div>
      <h1>Hangman</h1>
      <Illustration />
      <Keyboard />
      <LanguageButton />
      <ThemeButton />
      <WordDisplay />
    </div>
  );
};

export default Game;
