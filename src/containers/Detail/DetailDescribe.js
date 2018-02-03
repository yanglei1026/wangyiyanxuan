import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/actions/choose';

@connect(state=>({...state.choose}),actions)
export default class DetailDescribe extends React.Component {
    render() {
        return (
            <div className="detail-describe">
                <div className="detail-label">
                    {this.props.item.map((cur, index) => (
                        <li key={index}>
                            <img src={cur.img} alt=""/>
                            <p className="desc-text">
                                <span className="up">{cur.up}</span>
                                <span className="down">{cur.down}</span>
                            </p>
                        </li>
                    ))}
                </div>
                <div className="detail-product">
                    <div className="product-content">
                        <p className="product-title">日本AKOYA天然海水珍珠18K金项链</p>
                        <p className="product-desc">GGC专业认证，日本顶级花珠</p>
                        <p className="product-price">￥999</p>
                        <div className="product-label">新品<i className="iconfont icon-youjiantou"></i></div>
                    </div>
                    <ul className="user-say">
                        <li className="user-num">127</li>
                        <li className="user">用户评价</li>
                        <Link to='/detail_comment' className="look">查看</Link>
                    </ul>
                </div>
                <div className="user-select">
                    <p className="select-content">{this.props.how===undefined?"请选择规格数量":"已选择："+this.props.how}</p>
                    <Link to='/detail_choose' className="iconfont icon-youjiantou"></Link>
                </div>
                <div className="add-score">积分：购买最高得99分</div>
                <div className="product-server">
                    <div className="server-title">服务：</div>
                    <ul className="server-content">
                        <li>
                            <i className="red-dot"></i>
                            <p>30天无忧退换货</p>
                        </li>
                        <li>
                            <i className="red-dot"></i>
                            <p>48小时快速退款</p>
                        </li>
                        <li>
                            <i className="red-dot"></i>
                            <p>满88元免邮费</p>
                        </li>
                        <li>
                            <i className="red-dot"></i>
                            <p>网易自营品牌</p>
                        </li>
                        <li>
                            <i className="red-dot"></i>
                            <p>国内部分地区无法配送</p>
                        </li>
                    </ul>
                    <Link to='/detail_server' className="iconfont icon-youjiantou"></Link>
                </div>
                <div className="user-title">
                    <p className="user-idea">全部评论(130)</p>
                    <Link to='/detail_comment' className="iconfont icon-youjiantou"></Link>
                    <p className="idea-score">96.9%好评</p>
                </div>
                <div className="idea"></div>
                <ul className="product-params">
                    <li className="params-title">商品参数</li>
                    <li>
                        <span>产地</span>
                        <span>日本</span>
                    </li>
                    <li>
                        <span>项链</span>
                        <span>18K金</span>
                    </li>
                    <li>
                        <span>珍珠</span>
                        <span>天然海水珠</span>
                    </li>
                    <li>
                        <span>珍珠形状</span>
                        <span>正圆</span>
                    </li>
                    <li>
                        <span>珍珠光泽</span>
                        <span>强光</span>
                    </li>
                    <li>
                        <span>珍珠颜色</span>
                        <span>白透粉</span>
                    </li>
                    <li>
                        <span>珍珠小贴士</span>
                        <span>因严选珍珠取自海洋蚌非人造珍珠，故形状，光泽，颜色上会有细微差异；也无法做到人为意义上的完美无瑕。</span>
                    </li>
                </ul>
                <div className="product-picture">
                    {this.props.cur.map((item, index) => (
                        <p key={index}>
                            <img src={item.img} alt=""/>
                        </p>
                    ))}
                </div>
                <div className="quality-test">
                    <div className="quality-title">
                        <i className="line"></i>
                        <p className="quality-text">质检报告</p>
                    </div>
                    <div className="quality-img">
                        <img src="http://yanxuan.nosdn.127.net/de5fdff7f2ab765e1b65bd6affe0df6c.jpg?imageView=&thumbnail=720x0&quality=75" alt=""/>
                    </div>
                </div>
                <div className="common-problem">
                    <div className="common-title">
                        <i className="line"></i>
                        <p className="common-text">常见问题</p>
                    </div>
                    <ul className="common-content">
                        <li>
                            <h3>
                                <i className="dot"></i>
                                <p className="problem-title">购买运费如何收取？</p>
                            </h3>
                            <p className="problem-content">单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。<br/>(港澳台地区需满500元免邮费；不满500元，每单收取30元运费)</p>
                        </li>
                        <li>
                            <h3>
                                <i className="dot"></i>
                                <p className="problem-title">如何申请退换货？</p>
                            </h3>
                            <p className="problem-content">1.自收到商品之日起30日内，顾客可申请无忧退货；如果是退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；<br/>2.内裤和食品等特殊商品无质量问题不支持退换货；<br/>3.退货流程：<br/>确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；<br/>4.换货流程：<br/>确认收货-申请换货-客服审核通过-用户寄回商品-仓库签收验货-客服确认-换货完成；<br/>5.退换货运费由网易严选承担（大件商品除外）。上门取件费用由网易严选统一与快递服务商结算，顾客只需将退换货商品交给上门取件快递员寄回。如顾客选择自行寄回商品，请先垫付运费，到货验证商品后，严选将以现金券形式为用户报销运费，不接受单方面到付件。</p>
                        </li>
                        <li>
                            <h3>
                                <i className="dot"></i>
                                <p className="problem-title">如何开具发票？</p>
                            </h3>
                            <p className="problem-content">1.请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以上版本）。开具增值税专用发票需在下单时填写增票资质信息。温馨提示：请确保增票资质信息与贵司税务登记证信息一致，避免因开票信息错误给贵司带来损失。<br/>2.可选开票内容：<br/>订单中含有办公用品（箱包、文具、口罩）--办公用品、耗材、日用品、家居用品、食品、酒/饮料、服饰、化妆品；<br/>不含有办公用品--日用品、家居用品、食品、酒/饮料、服饰、化妆品；<br/>订单商品为礼品卡--预付卡。<br/>3.增值税专用发票开具内容为明细。</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}