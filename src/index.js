import "babel-polyfill";
import configureStore from "./store/configureStore";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {hashHistory, IndexRoute, Route, Router} from "react-router";
import App from "./components/App/App";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import DuplicatesPage from "./components/DuplicatesPage/DuplicatesPage";
import NavbarCreator from "./composable/Navbar/Navbar";

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={NavbarCreator(DashboardPage)}/>
                <Route path="duplicates" component={NavbarCreator(DuplicatesPage)}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);