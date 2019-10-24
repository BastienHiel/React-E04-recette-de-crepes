/**
 * Import
 */
import React from 'react';
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Steps from 'src/components/Steps';

import data from 'src/data/content';
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
  return <div id="app">
    <Header image= {data.image} title={data.title} author={data.author} level={data.level}/>
    <Ingredients ingredients={data.ingredients} />
    <Steps steps={data.steps} />
  </div>;
}

/**
 * Export
 */
export default Recipe;
