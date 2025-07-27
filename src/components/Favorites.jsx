import React from "react";
import WordCard from "./WordCard";

export default function Favorites({ favorites = [], wordList = [], toggleFavorite }) {
  // Ensure both favorites and wordList are arrays
  const favWords = Array.isArray(wordList) && Array.isArray(favorites)
    ? wordList.filter((w) => favorites.includes(w.word))
    : [];

  const handleToggleFavorite = (word) => {
    if (toggleFavorite && typeof toggleFavorite === 'function') {
      toggleFavorite(word);
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center text-pink-600">❤️ Favorites</h2>

      {favWords.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">You haven't added any favorites yet.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {favWords.map((word) => (
            <WordCard
              key={word.word}
              word={word}
              isFavorite={favorites.includes(word.word)}
              toggleFavorite={() => handleToggleFavorite(word.word)}
            />
          ))}
        </div>
      )}
    </div>
  );
}