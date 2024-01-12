import React from 'react';

import { AllRecipes } from '../features/allRecipes/AllRecipes.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

// Import the FavoriteRecipes component here.
import FavoriteRecipes from '../features/favoriteRecipes/FavoriteRecipes.js';

export function App(props) {
  const {state, dispatch} = props;

  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
  const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

  // Render the <FavoriteRecipes /> component.
  // Pass `dispatch` and `favoriteRecipes` props.
  // console.log('you see this');
  for (let key in state) {
    console.log('key is ' + key);
    console.log('value is ' + state[key]);
    console.log('state is: ' + JSON.stringify(state));
  }
  return (
    <main>
      <section>
        <SearchTerm
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes 
          favoriteRecipes={visibleFavoriteRecipes}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes
          allRecipes={visibleAllRecipes} 
          dispatch={dispatch}
        />
      </section>
    </main>
  )
}

/* Utility Helpers */

function getFilteredRecipes(recipes, searchTerm) {
  return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}