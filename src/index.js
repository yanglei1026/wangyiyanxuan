import React, {Component} from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import App from "./containers/App";
import Home from "./containers/Home/Home";
import Shiwu from "./containers/Shiwu/Shiwu";
import Fenlei from "./containers/Fenlei/Fenlei";
import Geren from "./containers/Geren/Geren";
import Cart from "./containers/Cart/Cart";
import CartMore from "./containers/Cart/CartMore";
import {Provider} from "react-redux"
import store from "./redux/index";
import "./util/reset.less";
import Detail from "./containers/Detail/Detail";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Search from "./containers/Detail/Search";
import Detail_server from "./containers/Detail/Detail_server";
import Detail_choose from "./containers/Detail/Detail_choose";
import Address from "./containers/Address/Address";
import Order from "./containers/Order/Order";
import Help from "./containers/Help/Help";
import Agreement from "./containers/Agreement/Agreement";
import Invoice from "./containers/Invoice/Invoice";
import Pay from "./containers/Pay/Pay";
import Detail_comment from "./containers/Detail/Detail_comment";
import Shidianyike from "./containers/Shiwu/Shidianyike/Shidianyike";
import Yanxuantuijian from "./containers/Shiwu/Yanxuantuijian/Yanxuantuijian";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App>
                <Switch>
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
                    <Route path="/agreement" component={Agreement}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/cartmore" component={CartMore}/>
                    <Route path="/pay" component={Pay}/>
                    <Route path="/detail_server" component={Detail_server}/>
                    <Route path="/detail_choose" component={Detail_choose}/>
                    <Route path="/detail_comment" component={Detail_comment}/>
                    <Route path="/shidianyike" component={Shidianyike}/>
                    <Route path="/yanxuantuijian" component={Yanxuantuijian}/>
                    <Redirect path="*" to="/home"/>
                </Switch>
            </App>
        </HashRouter>
    </Provider>
   , window.root
);