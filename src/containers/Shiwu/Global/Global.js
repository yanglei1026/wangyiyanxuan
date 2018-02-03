import React from 'react';
import "./index.less"
import lookItem from './look.jpg';

export default class Global extends React.Component {
    render() {
        return (
            <div className="global-look">
                <div className="global">
                    <div className="module-title">严选全球</div>
                    <div className="content">
                        <a href="javascript:" className="mainItem">
                            <div className="mainPic"></div>
                            <div className="topicInfo">
                                <div className="line1">严选全球日本篇</div>
                                <div className="line2">极具日式风情的餐厨好物，具有巧思的精致生活好物，日本制造商品不定期更新中。</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="look">
                    <div className="module-title">
                        严选LOOK
                    </div>
                    <a href="javascript:" className="content">
                        <img src={lookItem} alt="" className="scenePic"/>
                        <div className="topicInfo">
                            <div className="desc">
                                互联网大会同不同款没关系，主要是酒的品质非常好，口感清醇，非一般黄酒能及。酒喝完了，用来与插花也是不错的。
                            </div>
                        </div>

                    </a>
                </div>
            </div>
        )
    }
}