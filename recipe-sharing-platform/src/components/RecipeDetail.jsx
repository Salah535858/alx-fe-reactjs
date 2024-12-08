import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching recipe details:", error));
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-8 shadow-md"
      />

      {/* Summary section */}
      <p className="text-lg mb-8 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
        {recipe.summary}
      </p>

      {/* Content sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Ingredients card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Ingredients
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-lg text-gray-800">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Instructions
          </h2>
          <ol className="list-decimal pl-6 space-y-3">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="text-lg text-gray-800">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Back to Home button */}
      <div className="text-center">
        <a
          href="/"
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Recipes
        </a>
      </div>
    </div>
  );
};

export default RecipeDetail;
