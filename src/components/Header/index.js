import React from 'react';
import './styles.sass';


const Header = (props) => <div id="app-header">
  <h1>{props.title}</h1>
  <span> Auteur : {props.author}</span>
</div>;

export default Header;
