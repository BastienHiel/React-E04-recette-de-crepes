import React from 'react';
import './styles.sass';


const Header = (props) => <div id="app-header">
  <img src={props.image} />
  <h1>{props.title}</h1>
  <h2>Auteur : {props.author}</h2>
  <h3>Difficulté : {props.level}</h3>
</div>;

export default Header;
