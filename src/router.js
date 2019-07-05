import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import GraphPage from "./GraphPage";
// import Graph from "./Components/Graph/Graph";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/graph" component={GraphPage} />
            {/* <Route path="/graph" component={Graph} /> */}
        </Switch>
    </BrowserRouter>
);

export default Router;