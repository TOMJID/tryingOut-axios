import React, { memo } from "react";
import CocktailItem from "./CocktailItem";

function CocktailList({ cocktails }) {
  console.log(cocktails);
  return (
    <>
      <div className="row">
        {cocktails.map((cocktail) => (
          <CocktailItem key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </>
  );
}

export default memo(CocktailList);
