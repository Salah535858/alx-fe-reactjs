import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationSteps, setPreparationSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    let formErrors = {};

    if (!title) formErrors.title = "Recipe title is required.";
    if (!ingredients || ingredients.split("\n").length < 2) {
      formErrors.ingredients = "Please provide at least two ingredients.";
    }
    if (!preparationSteps) {
      formErrors.preparationSteps = "Preparation steps are required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Assuming we're just logging the data for now
      const newRecipe = {
        title,
        ingredients: ingredients.split("\n"), // Split ingredients by line
        preparationSteps: preparationSteps.split("\n"),
      };
      console.log("New Recipe:", newRecipe);

      // Reset form
      setTitle("");
      setIngredients("");
      setPreparationSteps("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        {/* Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-2">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Textarea */}
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-lg font-medium mb-2"
          >
            Ingredients (Enter each ingredient on a new line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            rows="4"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps Textarea */}
        <div className="mb-4">
          <label
            htmlFor="preparationSteps"
            className="block text-lg font-medium mb-2"
          >
            Preparation Steps (Enter each step on a new line)
          </label>
          <textarea
            id="preparationSteps"
            value={preparationSteps}
            onChange={(e) => setPreparationSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            rows="6"
          ></textarea>
          {errors.preparationSteps && (
            <p className="text-red-500 text-sm mt-2">
              {errors.preparationSteps}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
