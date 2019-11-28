import React from "react";

export default function Login({ authenticate }) {
  return (
    <div className="login">
      <h2>Veuillez vous connecter afin de créer vos propres recettes.</h2>
      <button onClick={authenticate} className="facebook-button">
        Se connecter via Facebook
      </button>
    </div>
  );
}
