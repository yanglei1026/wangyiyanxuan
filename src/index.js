import React, {Component} from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import App from "./containers/App";
import Home from "./containers/Home/Home";
import Shiwu from "./containers/Shiwu/Shiwu";
import Fenlei from "./containers/Fenlei/Fenlei";
import Geren from "./containers/Geren/Geren";
import Cart from "./containers/Cart/Cart";
import {Provider} from "react-redux"
import store from "./redux/index";
import "./util/reset.less";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/shiwu" component={Shiwu}/>
                    <Route path="/fenlei" component={Fenlei}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/geren" component={Geren}/>
                </Switch>
            </App>
        </HashRouter>
    </Provider>
   , window.root
);