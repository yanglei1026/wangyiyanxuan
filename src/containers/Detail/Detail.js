import React, {Component} from "react";
import {connect} from "react-redux";
import "./Detail.less";
import actions from "../../redux/actions/home";
import {WhiteSpace,Flex,WingBlank} from "antd-mobile"
import Item from "../../components/Item/Item";

import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
};


@connect(state => ({...state.home}), actions)
export default class Detail extends Component {
    componentDidMount() {
        this.props.getHomeData("jujia");
        this.setState({data:this.props.data});
    }

    render() {
        let data = this.props.data;
        // err: 0, data: {…}, hasMore: true, msg: "数据请求成功"
        data = data.data;  // data 是
        console.log(data);
        data===undefined? data={}:null;
        return (
            <div className="product-list">
                <img src={data.top_img} className='top-img'/>
                <div className="content-title">
                    <p className="name">{data.titlename}</p>
                    <p className="info">{data.info}</p>
                </div>
                <WingBlank>
                    <ul>
                        <Flex>
                            <Flex.Item><Item/></Flex.Item>
                            <Flex.Item><Item/></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><Item/></Flex.Item>
                            <Flex.Item><Item/></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><Item/></Flex.Item>
                            <Flex.Item><Item/></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><Item/></Flex.Item>
                            <Flex.Item><Item/></Flex.Item>
                        </Flex>
                    </ul>
                </WingBlank>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
            </div>
        )
    }
}

