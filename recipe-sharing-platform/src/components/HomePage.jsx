import React from "react";
import { Link } from "react-router-dom";
import recipes from "../data.json"; // make sure this path is correct

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        🍲 Recipe Sharing Platform
      </h1>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Recipe Info */}
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2 line-clamp-2">
                {recipe.description || "A delicious recipe to try at home."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
