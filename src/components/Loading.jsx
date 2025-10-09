import React from "react";

const Loading = ({ message = "Please wait..." }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div
        className={`spinner-border `}
        style={{ width: "3rem", height: "3rem" }}
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h3 className="mt-4 text-secondary">{message}</h3>
    </div>
  );
};

export default Loading;
