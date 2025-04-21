import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Spinner from "components/Spinner/Spinner";
import Home from "pages/Home/Home";
import { APP_ROUTES } from "routes/routes";

const RoutesComponent = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<Home />} />
    </Routes>
  </Suspense>
);

export default RoutesComponent;
