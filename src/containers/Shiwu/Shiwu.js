import React, {Component} from "react";
import Banner from "./Banner/Banner";
import Channels from "./Channels/Channels";
import Recommend from "./Recomend/Recommend";
import More from "./More/More";
import "./index.less";
import Tenfifteen from "./Tenfifteen/Tenfifteen";
import Zhenpin from "./Zhenpin/Zhenpin";
import Global from "./Global/Global";


export default class Shiwu extends Component {

    render() {
        return (
            <div className="explore">
                {/*轮播图*/}
                <Banner/>
                {/*频道*/}
<Channels/>
                {/*为你推荐*/}
<Recommend/>
                {/*十点一刻*/}
<Tenfifteen/>
                {/*严选甄品*/}
<Zhenpin/>
                {/*全球和LOOK*/}
<Global/>
                {/*加载更多*/}
                <More/>
            </div>
        )
    }
}