import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Graph from "./Components/Container/Graph";
import App from "./App";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Graph" component={Graph} />
        </Switch>
    </BrowserRouter>
);

export default Router;