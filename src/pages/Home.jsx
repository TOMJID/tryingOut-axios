import axios from "axios";
import React, { memo, useEffect } from "react";
import { useAppContext } from "../context/globalContext";
import { SET_COCKTAILS, SET_ERROR, SET_LOADING } from "../context/reducer";
import CocktailList from "../components/CocktailList";
import Loading from "../components/Loading";
function Home() {
  const { cocktails, error, loading, dispatch } = useAppContext();
  const [searchTerm, setSearchTerm] = React.useState("");
  const fetchCocktails = async (term) => {
    dispatch({ type: SET_LOADING, payload: true });

    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
      );
      dispatch({ type: SET_COCKTAILS, payload: response.data.drinks });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: true });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  useEffect(() => {
    fetchCocktails("margarita");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchCocktails(searchTerm.trim());
    }
  };
  return (
    <>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            placeholder="Search for your drinks"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      {loading ? <Loading /> : <CocktailList cocktails={cocktails} />}
    </>
  );
}

export default memo(Home);
