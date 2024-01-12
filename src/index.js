//https://www.codecademy.com/courses/learn-redux-fundamentals/lessons/strategies-for-complex-state/exercises/using-store-data-within-feature-components
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/App.js';
// Import 'store' here.
import {store} from './app/store.js';

const root = createRoot(document.getElementById('root'));
const render = () => {
  // Pass `state` and `dispatch` props to <App />
  root.render(
    <App 
    state={store.getState()}
    dispatch={store.dispatch}
    />
  )
}
render();
// Subscribe render to changes to the `store`
store.subscribe(render);