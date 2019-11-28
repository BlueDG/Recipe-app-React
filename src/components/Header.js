import React from "react";

export default function Header({ pseudo }) {
  const formatPseudo = pseudo =>
    /[aeiou]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;
  return (
    <header>
      <h1>Recettes {formatPseudo(pseudo)} </h1>
    </header>
  );
}
