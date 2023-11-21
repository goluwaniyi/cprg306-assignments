// week7/meal-ideas.js
import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  // State variable to hold the list of meal ideas
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas from the API
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
    }
  };

  // Function to load meal ideas when the ingredient prop changes
  const loadMealIdeas = () => {
    fetchMealIdeas(ingredient);
  };

  // useEffect hook to call loadMealIdeas when the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Render method
  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
