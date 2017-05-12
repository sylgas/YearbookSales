import React from 'react';
import {render} from 'react-dom';
import './app.less';
import SalesBox from "../YearbookSales/SalesBox/index";
import configureStore from '../../store/configureStore'
import Provider from "react-redux/src/components/Provider";

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="col-md-11">
                    <div className="col-md-4">
                        <SalesBox/>
                    </div>
                </div>
            </Provider>
        );
    }
}

render(<App/>, document.getElementById('app'));