import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import "./app.less";
import configureStore from "../../store/configureStore";
import Provider from "react-redux/src/components/Provider";
import Dashboard from "../Dashboard/Dashboard";
import Router from "react-router/es/Router";
import Route from "react-router/es/Route";
import {hashHistory} from "react-router";

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Dashboard}>
            </Route>
        </Router>
    </Provider>
);

render(<App/>, document.getElementById('app'));