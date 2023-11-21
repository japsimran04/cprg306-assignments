"use client";

import { useEffect, useState } from 'react';

async function fetchMealIdea(ingredient) {
  console.log(ingredient);
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}')
  const data = await response.json();
  return data.meals;
}

export default function MealIdea({ingredient}) {
  const [mealIdea, setMealIdea] = useState([]);

  async function loadMeals() {
    try {
      if (ingredient === "") {
        setMealIdea([]);
        return;
      }
      const data = await fetchMealIdea(ingredient);
      if (data !== null) {
        setMealIdea(data);
      } else {
        setMealIdea([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect (() => {
    loadMeals();
  }, [ingredient]);

  return (
    <div>
      <h2 className='text-xl font-bold'>Meal Idea for {ingredient}</h2>
      <ul>
        {mealIdea.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal} </li>
        ))}
      </ul>
    </div>
  );
}

  