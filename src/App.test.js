import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
const { getTerritories, getProvincesData } = require('./api')

// Test 1 - Check if App Component contains Hello Canada Data.

test('Rendering <App> component and checking if Hello Canada is present in the data', () =>{
    const { getByRole } = render(<App />);
    const h1= getByRole('heading');
    expect(h1.textContent).toBe('Hello Canada');
});

// Test 2 - Testing number of Province components that are to be returned by Provinces.

test('Test if rendering Provinces will return 10 <Province> components', async () => {
    const provinces = await getProvincesData();
    expect(provinces.length).toBe(10);
  });

// Test 3 - Check if rendering Territories component will render 3 territories.

test('Test if rendering Territories will return 3 territories', async () => {
   const territoriesData = await getTerritories();
   expect(territoriesData.length == 3).toBe(true);
 });