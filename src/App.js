import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Card from "./components/Card";
import withFirebase from "./hoc/withFirebase";
import PropTypes from "prop-types";
import ColorContext from "./components/Color";

const App = ({
  match,
  recettes,
  ajouterRecette,
  majRecette,
  chargerExemple,
  supprimerRecette
}) => {
  const cards = Object.keys(recettes).map(key => (
    <Card key={key} details={recettes[key]} />
  ));

  return (
    <ColorContext>
      <div className="box">
        <Header pseudo={match.params.pseudo} />
        <div className="cards">{cards}</div>
        <Admin
          pseudo={match.params.pseudo}
          recettes={recettes}
          ajouterRecette={ajouterRecette}
          majRecette={majRecette}
          chargerExemple={chargerExemple}
          supprimerRecette={supprimerRecette}
        />
      </div>
    </ColorContext>
  );
};

App.propTypes = {
  match: PropTypes.object.isRequired,
  recettes: PropTypes.object.isRequired,
  ajouterRecette: PropTypes.func.isRequired,
  majRecette: PropTypes.func.isRequired,
  chargerExemple: PropTypes.func.isRequired,
  supprimerRecette: PropTypes.func.isRequired
};

const WrappedComponent = withFirebase(App);

export default WrappedComponent;
