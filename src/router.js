import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Graph from "./Components/Graph/Graph";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/graph" component={Graph} />
        </Switch>
    </BrowserRouter>
);

export default Router;