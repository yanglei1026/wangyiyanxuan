import React, {Component} from "react";
import {connect} from "react-redux";
import "./Detail.less";
import actions from "../../redux/actions/home";
import {WhiteSpace,Flex,WingBlank} from "antd-mobile"

@connect(state => ({...state.home}), actions)
export default class Detail extends Component {
    componentDidMount() {
        this.props.getHomeData("jujia");
        // this.setState({data:this.props.data});
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
                            <Flex.Item></Flex.Item>
                            <Flex.Item></Flex.Item>
                        </Flex>
                    </ul>
                </WingBlank>
            </div>
        )
    }
}

