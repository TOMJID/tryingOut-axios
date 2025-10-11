import React, { memo } from "react";
import CocktailItem from "./CocktailItem";

function CocktailList({ cocktails }) {
  if (!cocktails) {
    return (
      <h2 className="text-center alert alert-primary">No cocktails found.</h2>
    );
  }
  return (
    <>
      <div className="row">
        {cocktails.map((cocktail) => (
          <CocktailItem key={cocktail.idDrink} {...cocktail} />
        ))}
      </div>
    </>
  );
}

export default memo(CocktailList);
