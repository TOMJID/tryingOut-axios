import { BrowserRouter, Route, Routes } from "react-router";
import SharedLayouts from "./layouts/SharedLayouts";
import { lazy } from "react";

// lazy loading the pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Error = lazy(() => import("./pages/Error"));
const SingleCocktail = lazy(() => import("./pages/SingleCocktail"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* navbar || shared layout */}
          <Route path="/" element={<SharedLayouts />}>
            {/* home || root page */}
            <Route index element={<Home />} />
            {/* about page */}
            <Route path="about" element={<About />} />
            {/* cocktails page */}
            <Route path="cocktail/:id" element={<SingleCocktail />} />
          </Route>
          {/* Error page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
