import React, {Component} from "react";
import {Flex} from "antd-mobile"
import "./Tab.less";
import 'antd-mobile/dist/antd-mobile.css';
import {NavLink} from "react-router-dom"

export default class Tab extends Component {
    render() {
        return (
            <Flex className="tab">
                <Flex.Item align="center" justify="center">
                    <NavLink to="/home">
                        <i className="iconfont icon-shouye"></i>
                        <span>首页</span>
                    </NavLink>
                </Flex.Item>
                <Flex.Item align="center" justify="center"><NavLink to="/shiwu"><i
                    className="iconfont icon-shitu"></i><span>识物</span></NavLink></Flex.Item>
                <Flex.Item align="center" justify="center"><NavLink to="/fenlei"><i
                    className="iconfont icon-ziyuan"></i><span>分类</span></NavLink></Flex.Item>
                <Flex.Item align="center" justify="center">
                    <NavLink to="/cart">
                        <i className="iconfont icon-gouwuche"></i>
                        <span>购物车</span>
                    </NavLink>
                </Flex.Item>
                <Flex.Item align="center" justify="center"><NavLink to="/geren"><i
                    className="iconfont icon-solid-person"></i><span>个人</span></NavLink></Flex.Item>
            </Flex>
        )
    }
}
