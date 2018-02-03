import React, {Component} from "react";
import './cart.less';
import "./index.less";
import {Link} from "react-router-dom";
export default class Cart extends Component {
    constructor() {
        super();
        let allThing = [{
            "img": "http://yanxuan.nosdn.127.net/aa68d160af714a4df687227bbdf89768.png?imageView&thumbnail=160x0&quality=75",
            "title": "全期猫粮1.8KG",
            "details": "1.8KG/袋",
            "price": 88.00,
            "count": 1,
            checked: true
        },
            {
                "img": "http://yanxuan.nosdn.127.net/b5228b1128f8aeb1a0d7163696302b90.png?imageView&thumbnail=160x0&quality=75",
                "title": "草莓白巧克力 65克",
                "details": "1袋装",
                "price": 16.00,
                "count": 1,
                checked: true
            },
            {
                "img": "http://yanxuan.nosdn.127.net/1f31d950548a9c52a1aaea8ff5910a46.png?imageView&thumbnail=160x0&quality=75",
                "title": "全期狗粮2.0KG",
                "details": "2.0KG/袋",
                "price": 88.00,
                "count": 1,
                checked: true
            }
        ];
        allThing = allThing.concat(JSON.parse(JSON.stringify(allThing)));
        this.state = {allThing,isClicked: false}
    }

    componentWillMount() {
        +function () {
            window.config = {
                htmlfontSize: 75
            };
            let desW = 750;
            let doc = document.documentElement;

            function refreshRem() {
                let size;
                let winW = doc.clientWidth;
                console.log(winW, desW);
                if (winW >= desW) {
                    window.config.htmlfontSize = size = 150
                } else {
                    window.config.htmlfontSize = size = 150 / (desW / winW)
                }
                doc.style.fontSize = size + 'px';
            }

            refreshRem();
            window.addEventListener('resize', refreshRem);
        }()
    }

    removeClick = (index, e) => {
        let newThing = this.state.allThing.filter((item, inx) => (inx !== index)
        );
        this.setState({allThing: newThing});
        console.log(this.state.allThing);
        console.log(newThing);
    };
    allMoney = () => {
        let allPrice = this.state.allThing.reduce((prev, next) => {
            if (next.checked) {
                return prev + next.price * next.count
            } else {
                return prev
            }

        }, 0);
        console.log(allPrice);
        console.log(1);
        return allPrice
    };
    minus = (index) => {
        let ary = this.state.allThing;
        ary = ary.map((item, i) => {
            if (i === index) {
                item.count--;
                if (item.count < 1) item.count = 1;
                console.log('该商品一件起售')
            }
            return item
        });
        this.setState({allThing: ary})

    };
    add = (index) => {
        let ary = this.state.allThing;
        ary = ary.map((item, i) => {
            i === index ? item.count++ : null;
            return item
        });

        this.setState({allThing: ary})

    };
    checked = () => {
        console.log('checked');
        return this.state.allThing.reduce((prev, next) => {
            if (next.checked) {
                return prev + next.count
            } else {
                return prev
            }
        }, 0)

    };
    check = (index) => {
        let allThing = this.state.allThing;
        allThing.forEach((item, i) => {
            if (index == i) {
                item.checked = !item.checked
            }
        })
        this.setState({allThing})
    };
    changeall = () => {
        let allThing = this.state.allThing;
        if (this.checkAll()) allThing.forEach(item => item.checked = false);
        else allThing.forEach(item => item.checked = true);
        this.setState({allThing})
    };
    checkAll = () => {
        return this.state.allThing.every(item => item.checked)
    };
    handleClick = () => {
        this.setState({isClicked: !this.state.isClicked});
        this.setState({num: this.state.num});

    };

    render() {
        return (
            <div className="CartFull">
                <div className="Cart-header">
                    <span>购物车</span>
                    <span onClick={this.handleClick}>{this.state.isClicked ? "完成" : "编辑"}</span>
                </div>
                <div className="Cart-main">
                    <div className="Cart-postage">
                        {this.allMoney()>1 ? "已满足免邮条件" : "再购元满足免邮条件"}
                    </div>
                    <div className="baozi">
                        {
                            this.state.allThing.map((item, index) => (
                                <div className="buycart" key={index}>
                                    <div className="check">
                                        <input type="checkbox" checked={item.checked} onChange={
                                            () => {
                                                this.check(index)
                                            }
                                        }/>
                                    </div>
                                    <div className="img">
                                        <img src={item.img}/>
                                    </div>
                                    <div className="all-details">
                                        <div style={{display: "flex"}} className="any-details">
                                            <span className="title">{item.title}</span>
                                            <span className="number">x{item.count}</span>
                                        </div>
                                        <div className="one-detail">{item.details}</div>
                                        <div className="price-btn">
                                            <span >$ {item.price}</span>

                                            <div className="removeOne" onClick={(e) => {
                                                this.removeClick(index, e)
                                            }}>删除

                                            </div>

                                            <div className="all-btn">
                                            <span className="reduce" onClick={() => {
                                                this.minus(index)
                                            }}>-</span>
                                                <input type="text"
                                                       value={item.count}
                                                       className="btn"/>
                                                <span className="add" onClick={() => {
                                                    this.add(index)
                                                }}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="Cart-buy">
                       <div className="Cart-buy-left">
                           <i checked={this.checkAll()} className="btnnn" onChange={
                            this.changeall
                        }></i>
                        <span> 已选({this.checked()})</span>
                        <span>¥{this.allMoney()}</span></div>
                        <div className="Cart-buy-right"><Link to="/address"><button>下单</button></Link></div>
                    </div>
                </div>
            </div>)
    }
}


