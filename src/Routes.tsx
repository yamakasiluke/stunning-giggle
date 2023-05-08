import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Loghistory = React.lazy(() => import("pages/Loghistory"));
const Dynamicfiltercondition = React.lazy(
  () => import("pages/Dynamicfiltercondition")
);
const Logmain = React.lazy(() => import("pages/Logmain"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Logmain />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/dynamicfiltercondition"
            element={<Dynamicfiltercondition />}
          />
          <Route path="/loghistory" element={<Loghistory />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
