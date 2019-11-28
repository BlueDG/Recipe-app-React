import React from "react";

export default function AdminForm({ id: key, majRecette, recettes }) {
  return (
    <div className="card">
      <form className="admin-form">
        <input type="text" name="nom" placeholder="Nom de la recette" />
        <input type="text" name="image" placeholder="Adresse de l'image" />
        <textarea
          name="ingredients"
          rows="3"
          placeholder="Liste des ingrédients"
        ></textarea>
        <textarea
          name="instructions"
          rows="15"
          placeholder="Liste des instructions"
        ></textarea>
      </form>
      <button>Supprimer</button>
    </div>
  );
}
