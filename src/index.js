import "babel-polyfill";
import configureStore from "./store/configureStore";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {hashHistory, IndexRoute, Route, Router} from "react-router";
import App from "./components/App/App";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import DuplicatesPage from "./components/DuplicatesPage";

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={DashboardPage}/>
                <Route path="duplicates" component={DuplicatesPage}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);