// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import recipes from "../data.json";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        Recipe Sharing Platform
      </h1>

      {/* Add New Recipe Button */}
      <div className="flex justify-center mb-8">
        <Link
          to="/add-recipe"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow-md transition duration-300"
        >
          Add New Recipe
        </Link>
      </div>

      {/* Recipe Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {recipe.description || "A delicious recipe to try!"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
