import axios from "axios";
import React, { memo, useEffect } from "react";
import { useAppContext } from "../context/globalContext";
import { SET_COCKTAILS, SET_ERROR, SET_LOADING } from "../context/reducer";
import CocktailList from "../components/CocktailList";
import Loading from "../components/Loading";
function Home() {
  const { cocktails, error, loading, dispatch } = useAppContext();
  const fetchCocktails = async () => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      );
      dispatch({ type: SET_COCKTAILS, payload: response.data.drinks });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: true });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
  useEffect(() => {
    fetchCocktails();
  }, []);
  return (
    <>
      {loading ? <Loading /> : <CocktailList cocktails={cocktails} />}
    </>
  );
}

export default memo(Home);
