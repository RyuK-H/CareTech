import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUpPage} />
        <Route path="/signup" component={SignUpPage} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
