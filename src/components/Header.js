import React from "react";
import { ColorContext } from "./Color";

export default function Header({ pseudo }) {
  const formatPseudo = pseudo =>
    /[aeiou]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;
  return (
    <ColorContext.Consumer>
      {context => (
        <header style={{ backgroundColor: context.state.color }}>
          <h1>Recettes {formatPseudo(pseudo)} </h1>
        </header>
      )}
    </ColorContext.Consumer>
  );
}
