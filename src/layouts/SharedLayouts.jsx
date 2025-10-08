import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function SharedLayouts() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default SharedLayouts;
