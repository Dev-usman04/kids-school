import React from "react";
import { FaVolumeUp, FaHeart, FaRegHeart } from "react-icons/fa";

export default function WordCard({ word, isFavorite, toggleFavorite }) {
  const handleAudio = () => {
    if (word.audio) {
      new Audio(word.audio).play();
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-5 m-4 max-w-sm w-full transition transform hover:scale-105 hover:shadow-2xl">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-blue-600">{word.word}</h2>
        <button onClick={() => toggleFavorite(word.word)}>
          {isFavorite ? (
            <FaHeart className="text-red-500 text-xl" />
          ) : (
            <FaRegHeart className="text-gray-400 text-xl" />
          )}
        </button>
      </div>

      <p className="text-gray-500 italic">{word.pronunciation}</p>

      {word.audio && (
        <button onClick={handleAudio} className="mt-2 text-blue-400">
          <FaVolumeUp className="inline mr-1" /> Listen
        </button>
      )}

      <p className="mt-3 text-gray-700">{word.definition}</p>

      <img
        src={word.image}
        alt={word.word}
        className="mt-4 w-full h-40 object-contain rounded-xl"
      />

      <p className="mt-3 text-sm italic text-purple-500">"{word.example}"</p>
    </div>
  );
}
