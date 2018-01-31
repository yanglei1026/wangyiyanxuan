import React, {Component} from 'react';

export default class CartMore extends Component {
    constructor() {
        super();
        this.state = {isClicked: false,num:0.00}
    }

    handleClick = () => {
        this.setState({isClicked: !this.state.isClicked});
        this.setState({num: this.state.num});

    }

    render() {
        return (
            <div className="CartFull">
                <div className="Cart-header">
                    <span>购物车</span>
                    <span onClick={this.handleClick}>{this.state.isClicked ? "完成" : "编辑"}</span>
                </div>
                <div className="Cart-main">
                    <div className="Cart-postage">
                        {true == 1 ? "已满足免邮条件" : "再购元满足免邮条件"}
                    </div>
                    <div className="Cart-detail">
                        <span>选中</span>
                        <a href=""><img src="" alt=""/></a>
                        <span>产品标题</span>
                        <span>产品个数定位x</span>
                        <p>产品介绍</p>
                        <span>产品单价</span>
                        <div>
                            <button>-</button>
                            <input type="text"/>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="Cart-buy">
                        <i></i>
                        <span> 已选()</span>
                        <span>¥{this.state.num}</span>
                        <button>下单</button>
                    </div>
                </div>
            </div>
        )
    }
}
