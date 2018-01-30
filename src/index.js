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
import Detail_server from "./containers/Detail/Detail_server";
import Detail_choose from "./containers/Detail/Detail_choose";
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App>
                <Switch>
                    <Route path="/home" exact={true} component={Home}/>
                    <Route path="/shiwu" component={Shiwu}/>
                    <Route path="/fenlei" component={Fenlei}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/geren" component={Geren}/>
                    <Route path="/detail_server" component={Detail_server}/>
                    <Route path="/detail_choose" component={Detail_choose}/>
                </Switch>
            </App>
        </HashRouter>
    </Provider>
   , window.root
);