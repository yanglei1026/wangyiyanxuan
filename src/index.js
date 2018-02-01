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
import Detail from "./containers/Detail/Detail";
import Address from "./containers/Address/Address";
import Order from "./containers/Order/Order";
import Invoice from "./containers/Invoice/Invoice";
import Help from "./containers/Help/Help";
import Item from "./components/Item/Item";

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
                    <Route path="/detail" component={Detail}/>
                    <Route path="/address" component={Address}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/invoice" component={Invoice}/>
                    <Route path="/help" component={Help}/>
                    <Route path="/item" component={Item}/>
                </Switch>
            </App>
        </HashRouter>
    </Provider>
   , window.root
);
