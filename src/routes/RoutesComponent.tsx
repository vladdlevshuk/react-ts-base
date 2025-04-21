import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { APP_ROUTES } from "routes/routes";
import Home from "pages/Home/Home";

const RoutesComponent = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<Home />} />
    </Routes>
  </Suspense>
);

export default RoutesComponent;
