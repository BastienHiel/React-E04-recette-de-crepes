import React from 'react';


const Ingredients = (props) => <div>
<h4>Liste des ingrédients :</h4>
<ul>
  {props.ingredients.map(ingredient => <li key={ingredient}>- {ingredient}</li>)}
</ul>
</div>;

export default Ingredients;
