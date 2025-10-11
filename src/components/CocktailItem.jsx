import React, { memo } from "react";
import { FaCocktail } from "react-icons/fa";
import { Link } from "react-router";

function CocktailItem({
  idDrink,
  strDrink,
  strCategory,
  strAlcoholic,
  strGlass,
  strDrinkThumb,
}) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
        <div className="position-relative">
          <img
            src={strDrinkThumb}
            className="card-img-top img-fluid"
            alt={strDrink}
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="position-absolute top-0 end-0 m-2">
            <span className="badge bg-dark bg-opacity-75 rounded-pill px-3 py-2">
              {strAlcoholic}
            </span>
          </div>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold mb-3">{strDrink}</h5>

          <div className="mb-auto">
            <div className="d-flex align-items-center mb-2">
              <span className="badge bg-secondary me-2">Category</span>
              <span className="text-muted small">{strCategory}</span>
            </div>

            <div className="d-flex align-items-center mb-3">
              <span className="badge bg-info text-dark me-2">Glass</span>
              <span className="text-muted small">{strGlass}</span>
            </div>
          </div>

          <Link to={`cocktail/${idDrink}`} className="text-decoration-none">
            <button className="btn btn-primary w-100 mt-3 py-2 fw-semibold shadow-sm">
              <FaCocktail className="me-2" />
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(CocktailItem);
