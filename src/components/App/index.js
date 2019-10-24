/**
 * Import
 */
import React from 'react';
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Steps from 'src/components/Steps';
/**
 * Local import
 */
// Composants enfants éventuels

// Styles et assets
import './app.sass';

/**
 * Code
 */
function Recipe() {
  return <div>
    <Header />
    <Ingredients />
    <Steps />
  </div>;
}

/**
 * Export
 */
export default Recipe;
