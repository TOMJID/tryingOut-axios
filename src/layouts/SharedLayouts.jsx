import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Loading from "../components/Loading";
function SharedLayouts() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default SharedLayouts;
