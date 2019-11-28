import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Card from "./components/Card";
import withFirebase from "./hoc/withFirebase";

const App = props => {
  const cards = Object.keys(props.recettes).map(key => (
    <Card key={key} details={props.recettes[key]} />
  ));

  return (
    <div className="box">
      <Header pseudo={props.match.params.pseudo} />
      <div className="cards">{cards}</div>
      <Admin
        pseudo={props.match.params.pseudo}
        recettes={props.recettes}
        ajouterRecette={props.ajouterRecette}
        majRecette={props.majRecette}
        chargerExemple={props.chargerExemple}
        supprimerRecette={props.supprimerRecette}
      />
    </div>
  );
};

const WrappedComponent = withFirebase(App);

export default WrappedComponent;
