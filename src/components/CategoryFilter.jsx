import React from "react";

export default function CategoryFilter({ selected, setSelected }) {
  const categories = ["All", "Animals", "Colors", "Numbers", "Emotions"];

  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
            selected === category
              ? "bg-pink-500 text-white"
              : "bg-pink-100 text-pink-600 hover:bg-pink-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
