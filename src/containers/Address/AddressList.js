import React, {Component} from 'react';
import provinceList from "./Addressdata";


export default class AddressList extends Component {
    constructor() {
        super();

    }

    handleClick = (e) => {
        //alert(1)
        let city = provinceList[e.target.getAttribute("data-id")];
        return city["city"].map((item, index) => (
            <li key={index}> item["name"]</li>
        ))
    };


    render() {

        return (
            <div className="address-hide">
                <div className="address-swiper">
                    <div className="address-nav">
                        <a>请选择</a>
                        <a>城市</a>
                        <a>区县</a>
                        <span className="">确定</span>
                    </div>
                    <div className="chose">
                        <div className="chose-pro">
                            <ul id="proList" onClick={this.handleClick}>{provinceList.map((item, index) =>
                                (<li data-id={index} key={index}>{item["pro"]}</li>)
                            )}
                            </ul>
                        </div>
                        <div className="chose-city">
                            <ul id="cityList">
                            </ul>
                        </div>
                        <div className="chose-area">
                            <ul id="areaList">
                                {/* this.map((item,index)=>(
                            <li key={index}>item</li>
                            ))*/}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}





