import { createStore, combineReducers } from 'redux';

// Import the slice reducers here.
import {allRecipesReducer} from '../features/allRecipes/allRecipesSlice';
import {favoriteRecipesReducer} from '../features/favoriteRecipes/favoriteRecipesSlice';
import {searchTermReducer} from '../features/searchTerm/searchTermSlice';

const reducers = {
  // Add the slice properties here
  allRecipes: allRecipesReducer, 
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer
};

// Declare the store here.
export const store = createStore(combineReducers(reducers));

