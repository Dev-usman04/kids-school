import React from "react";

export default function WordOfTheDay({ word }) {
  if (!word) {
    return (
      <div className="text-center text-yellow-800 my-6">
        <p className="text-lg font-semibold">Loading word of the day...</p>
      </div>
    );
  }

  return (
    <div className="bg-yellow-100 text-yellow-800 rounded-xl p-4 shadow-md text-center my-6 mx-auto max-w-md">
      <h3 className="text-xl font-bold mb-2">🎉 Word of the Day 🎉</h3>
      <p className="text-2xl font-extrabold">{word.word}</p>
      <p className="italic text-sm text-gray-600">{word.pronunciation}</p>
    </div>
  );
}
