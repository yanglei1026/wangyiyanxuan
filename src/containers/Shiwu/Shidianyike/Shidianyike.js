import React from 'react';
import "./Shidianyike.less";
export default class Shidianyike extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    "baseInfo": "寒假在家都做些什么解乏",
                    "img": "https://yanxuan.nosdn.127.net/6de46eeab0c1a1294118ab4b554842c8.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 4,
                    "view": "999+"
                },
                {
                    "baseInfo": "你们家的青蛙都叫什么",
                    "img": "https://yanxuan.nosdn.127.net/fcac78a8226448e37304c074967d9840.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 26,
                    "view": "999+"
                },
                {
                    "baseInfo": "新年战衣都准备好了吗",
                    "img": "https://yanxuan.nosdn.127.net/6de46eeab0c1a1294118ab4b554842c8.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 2,
                    "view": "999+"
                },
                {
                    "baseInfo": "冬天的颜色",
                    "img": "https://yanxuan.nosdn.127.net/ed6d798b120168da5a65097628658a2c.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 7,
                    "view": "999+"
                },
                {
                    "baseInfo": "一碗腊八粥",
                    "img": "https://yanxuan.nosdn.127.net/479d64dcd486905287fb181b3c9a91c0.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 13,
                    "view": "999+"
                },
                {
                    "baseInfo": "书中自有",
                    "img": "https://yanxuan.nosdn.127.net/e8df73c3f2772911950480d37d170615.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 7,
                    "view": "999+"
                },
                {
                    "baseInfo": "你的城市下雪了吗",
                    "img": "https://yanxuan.nosdn.127.net/08b166bb26547cef88f85fb3870eb682.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 17,
                    "view": "999+"
                },
                {
                    "baseInfo": "你爱喝咖啡吗",
                    "img": "https://yanxuan.nosdn.127.net/1384e4ac988727ad52de185b72fc73eb.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 58,
                    "view": "999+"
                },
                {
                    "baseInfo": "你的独家解压方式",
                    "img": "https://yanxuan.nosdn.127.net/095ebe770af3eeeb23a54c5af9a21e5a.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 33,
                    "view": "999+"
                },
                {
                    "baseInfo": "难忘的童年经历",
                    "img": "https://yanxuan.nosdn.127.net/ba2798299bb58530aa582ded5c87dfb7.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 8,
                    "view": "999+"
                },
                {
                    "baseInfo": "你每天与屏幕相处几小时",
                    "img": "https://yanxuan.nosdn.127.net/621b2db6ea97053f11ee02d0614d63fa.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 48,
                    "view": "999+"
                },
                {
                    "baseInfo": " 哪些小零食让你相见恨晚",
                    "img": "https://yanxuan.nosdn.127.net/d52cf25f1ff32866c7d1c2c75c77d93f.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 2,
                    "view": "999+"
                },
                {
                    "baseInfo": " Hello,2018!",
                    "img": "https://yanxuan.nosdn.127.net/c8d7162a4a1c20a618aae522b29c43a3.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 16,
                    "view": "999+"
                },
                {
                    "baseInfo": "2017的目标达成了吗",
                    "img": "https://yanxuan.nosdn.127.net/24318c28ab95d0fc30975a1f2d54d4d3.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 13,
                    "view": "999+"
                },
                {
                    "baseInfo": "今年，你被套路过吗",
                    "img": "https://yanxuan.nosdn.127.net/c499b78b42ad399595d5050f0c08fa79.jpg?imageView&quality=85&thumbnail=220y136",
                    "num": 30,
                    "view": "999+"
                }

            ],
            banner: "https://yanxuan.nosdn.127.net/f0dbf0d65aee03f544e82495134339ef.jpg?imageView&quality=85&thumbnail=690x380",
            line: "http://yanxuan.nosdn.127.net/4280289b8e27ed5c1454bebc047075b5.png",
            view: "data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWRJREFUWAljYBgFIz0EGGEB0NjY6Pn///9ZQCwDE6MFzcjI+ASI0+rr67eDzGeBWQKyHMhOBzpkG0yMFjTQfG+oXbIo5gNd9B9FgIYcZLuYaGgPUUaPOgCeCLGFF3JcYZMnJAZMcPBchkstXgcQYwAug4kVH00DoyGANxGSkwtITbh4HUCqYcSmfGR1o2lgNATgIQBqqQATnTdyAqEFG2QHyC6Y2fBcAGomgVoqwKyH0iQDinc3NDSUwTSg00A5I6DYJKBea3Q5bHygOnCTDCaHt7Zqb28X/Pnz52Gg4gVAi3pgmkA0kC8GpFqBGBRqNUCHzwc6luRWFV4HAA0GWSQFpI4BDW8EWTJz5kzWFy9e5AB9UgUUX8jJydlYXl7+GaSWHEDQASBDm5ub1f/+/bsDyHwPxBJAfIGZmbmwtrb2JpBNESDKASAbJk2axP7hwweLf//+vQaGyjWKbB3VPBoCSCEAAJ9YczzuTIu8AAAAAElFTkSuQmCC",
            count: "data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA39JREFUWAntlt1L01EYx/dWeBElXk2QWlEYI0JHZCYFAyG8tAtD6AVKGnUhddUq96ILW1cFETXIIAMX+wMqLzIQpDAoDRSjqBWCXindGTXX55nnyG+/bb/NpKs88OU55znf5+X3nJffsdk22v9eAftaCxCNRl3Y+EAd8ABpaTAL3jH/G1lxqziBvr6+5uXl5U48C74BCZgG0jxAEtoBkg6HIxkOh1/TL9vKJhCLxXZmMpk4ng6Ax06n80koFPpazLPinmLuDBgHV6lIGlmyWSaAcReWt8BdcKPS8sJzwQ+DC+AK40fIoq1kAhjdx6Ld5XI19fT0fCtqXUaJDw+UYfAiEolcstvtWbNJQQKpVMo5PT2dglhfVVXVEgwGf5iN1jKOx+PblpaWRrH5QhLHzUk4zM4I/hDdFuBbb3DxrXw00W3t7e1NiM7Y8ioA4XI2m/XV1taeDQQCv4xEcx+uH91epZ/h616ZOcZxIpHYNDc3N4buDkszpOdWE0DpRSmlOkT/syaYpXI0gb4aPFfzB5FTJH7aKnFOyR5O1Bu4LcSYEVvjEvSzPhGr4GLAVwwiprxe73a4XQL6jeiczEliJRvH9xMxohD6NSmXAE72o2ig/AVrpIkiVdn3EbCzo6Mjo+ekLzrG1Yqjpwqk2+1+gNKnYq5UgKyaUY6gtLxGSbAe3rgxuI6gdLIkel/oqTyplmgE5WGZMC5BHvFfD/RxzCXAl8m97ZcNZhUYo4/Mt8ldYeYpnWzG3OYyz+uxiuHHl2zGlQpQ+g/0J+fn589rYjGpjtoid0XSmIS6vJLYTJU7jmzUALz3/KwmJYbc2bpdoxKjJDMMSh5DjlqDnASSmIAnPxwb/TbEosxpZ8Uk/N3oo+Conl+9B0ShLqITODpidZ4V1682pU2WptyX64sIbhLu7aIJiJIs5c/VXlNT4+7u7v6pieuR+NyM/TOQpt9l9FVwCsjuHISxhYWFl5C3Gsl/05efEXay3ougYI/lLYEOQGntLIe8AVr5HR9b5+9YdvsAH3Nd+zfKoglogipXnPE9EGNseVEZ7GRzh8BF1jxIVQf0nFlaJiBk9cy6SVeeZINWTzIS3AXnJJAn2VsQRJdGlmxlE9CWpkfpd/SzIA3EhwfUKTxFDhE4d9HQt2wVJ6C94NjFq7eRfSIBPUh5ZqWBJCR3Q0XLBHejbVQgV4E/I7xrtMRVJ3UAAAAASUVORK5CYII="
        }
    }

    render() {
        //let {baseInfo,img,num,view}=this.state.data;
        return <div className="TenClock">
            <div className="titleInfo">
                <div className="middle">
                    {/* <img src="" alt=""/>*/}
                </div>
                <img className="banner" src={this.state.banner}/>
                <p className="des">
                    今天一大早来到工位就有小伙伴问选妹，周末去哪儿嗨了？当然...当然是在忙着参加朋友圈冰雪摄影大赛啦!
                    <br/>
                    <br/>
                    如果要用一个词来概括上周全国大部分城市的天气，“雨雪冷冻周”完全不过分吧！
                    <br/>
                    <br/>
                    白雪飘扬，银装素果，风雪会覆盖农田，冻住路面，让城市一下子“慢”下来。
                    <br/>
                    <br/>
                    你的记忆中，有关于大雪天的故事吗？
                    <br/>
                    <br/>
                    或者，晒出你拍的美景吧，让大家看看素颜的城市有多美。
                </p>
                <img className="mountain" src={this.state.line}/>
                <button className="getBtn">立即参与</button>

            </div>
            <div className="gray"></div>
            <div className="m-ft">
                <ul className="list">
                    {
                        this.state.data.map((item, index) => (
                            <li key={index}>
                                <a href="#">
                                    <div className="fl clearfix">
                                        <p>{item.baseInfo}</p>
                                        <div className="view">
                                            <img src={this.state.view}/>
                                            <span className="num">{item.num}</span>
                                        </div>
                                        <div className="count">
                                            <img src={this.state.count} alt=""/>
                                            <span className="num">{item.view}</span>
                                        </div>
                                    </div>
                                    <img className="photo" src={item.img}/>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    }
}





















