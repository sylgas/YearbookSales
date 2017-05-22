import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import "./app.less";
import configureStore from "../../store/configureStore";
import Provider from "react-redux/src/components/Provider";
import Dashboard from "../Dashboard/Dashboard";

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Dashboard/>
    </Provider>
);

render(<App/>, document.getElementById('app'));