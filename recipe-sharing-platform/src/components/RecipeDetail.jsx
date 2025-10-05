import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();               // Get recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  // Find the recipe matching the ID when the component mounts
  useEffect(() => {
    const selectedRecipe = recipesData.find(
      (item) => String(item.id) === id
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-6 text-blue-500 hover:underline"
      >
        ← Back to Home
      </Link>

      {/* Recipe Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {recipe.name}
      </h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-72 object-cover rounded-lg shadow-lg mb-6"
      />

      {/* Ingredients Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Ingredients
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>

      {/* Instructions Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Instructions
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default RecipeDetail;
