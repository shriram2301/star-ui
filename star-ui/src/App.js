import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
