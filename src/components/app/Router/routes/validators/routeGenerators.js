import React from "react";
import { Route } from "react-router-dom";

export function createRoutesPublic(publicR) {
  return publicR.map((route, i) => {
    return (
      <Route exact path={route.route} key={i} component={route.component} />
    );
  });
}