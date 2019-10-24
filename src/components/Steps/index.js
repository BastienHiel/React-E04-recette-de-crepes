import React from 'react';


const Steps = (props) => <div>
  <h4>Liste des étapes à suivre :</h4>
  <ul>
    {props.steps.map(step => <li key={step}>- {step}</li>)}
  </ul>
</div>;

export default Steps;
