import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import { publicR } from "./routes";
import {
  createRoutesPublic,
} from "./routes/validators/routeGenerators";

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        {createRoutesPublic(publicR)}
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;