// App.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WordCard from './components/WordCard';
import WordOfTheDay from './components/WordOfTheDay';
import Favorites from './components/Favorites';
import CategoryFilter from './components/CategoryFilter';
import wordData from './data/word';
import Header from './components/Header';

import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  // ✅ Toggle favorite logic
  const toggleFavorite = (word) => {
    if (favorites.includes(word)) {
      setFavorites(favorites.filter((fav) => fav !== word));
    } else {
      setFavorites([...favorites, word]);
    }
  };

  const filteredWords = wordData.filter((word) => {
    const matchesSearch = word.word.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || word.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="min-h-screen bg-pink-50 font-fredoka overflow-x-hidden">
      <header className="text-center py-6 bg-pink-200 shadow-lg">
        <h1 className="text-4xl md:text-5xl text-purple-600 font-bold animate-bounce">
          Dictionary Builder for Kids 📚✨
        </h1>
      </header>

      <main className="px-4 md:px-8 py-6 space-y-10">
        <WordOfTheDay words={wordData} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter selected={selectedCategory} setSelected={setSelectedCategory} />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWords.map((word) => (
            <WordCard
              key={word.word}
              word={word}
              isFavorite={favorites.includes(word.word)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </section>

        <Favorites
          favorites={favorites}
          wordList={wordData}
          toggleFavorite={toggleFavorite}
        />
      </main>

      <footer className="text-center py-4 text-sm text-gray-500">
        © 2025 DevDre Dictionary Builder for Kids. Made with react && ❤️.
      </footer>
    </div>
  );
}
