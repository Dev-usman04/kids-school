import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-center mt-6">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-3 pl-10 pr-4 border rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
        />
        <FaSearch className="absolute top-3.5 left-3 text-gray-400" />
      </div>
    </div>
  );
}
