let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
    else  next();
});

let home_sliders = require("./mock/home-slider");

let axios = require("axios");

// app.get('/sliders', function (request, response) {
//     axios.get('http://html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1516694175474').then(function (res) {
//         response.json(res.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list);
//     });
// });

app.get('/home/sliders', function (request, response) {
    response.json(home_sliders);
});

let product_data = require("./mock/home");
// product_data  是mock数据, 数据类型是个 对象
let fenlei = require("./mock/fenlei");

app.get("/fenlei/:type" ,function (req,res) {
    let {type} = req.params;
    let data = {};
    for(let key in fenlei){
        if(fenlei[key].category == type ){
            data = fenlei[key];
        }
    }
    if(data["category"]===undefined) res.send({err:1, hasMore:false, msg:"请求失败"});
    res.send({err:0, data, hasMore:true,msg:"数据请求成功"});
});
