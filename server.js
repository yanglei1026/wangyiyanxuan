let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(session({
//     resave: true, // 每次重新保存
//     secret: "yang",
//     saveUninitialized: true // 页面一刷新   req.session 进行设置内容了  req.session.user = 123
// }));

// 解决跨域
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
    else next();
});

let home_sliders = require("./mock/home-slider");
let homeData = require("./mock/home");
let fenlei = require("./mock/fenlei");
// let axios = require("axios");

let users = [];

// app.get('/sliders', function (request, response) {
//     axios.get('http://html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1516694175474').then(function (res) {
//         response.json(res.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list);
//     });
// });

app.get('/home/sliders', function (request, response) {
    response.json(home_sliders);
});

// product_data  是mock数据, 数据类型是个 对象

app.get("/fenlei/:type", function (req, res) {
    let {type} = req.params;
    let data = {};
    for (let key in fenlei) {
        if (fenlei[key].category == type) {
            data = fenlei[key];
        }
    }
    if (data["category"] === undefined) res.send({err: 1, hasMore: false, msg: "请求失败"});
    res.send({err: 0, data, hasMore: true, msg: "数据请求成功"});
});


app.get("/home/:category", function (req, res) {
    // /home/${category}
    let {category} = req.params;
    console.log(category);
    let data = {};
        data = homeData[category];

    if (data["category"] === undefined) {
        res.send({err: 1, hasMore: false, msg: "请求失败"});
        return
    }
    res.send({err: 0, data, hasMore: true, msg: "数据请求成功"});
});

// {username:"xx", password:"yy", id:1}
app.post("/register", function (req, res) {
    let {username, password} = req.body;
    // let list = users;
    let newUser = users.find(item => item.username === username);

    if (users.length === 0) {
        users.push({id: 1, username, password});
        res.json({err: 0, msg: "恭喜, 注册成功"});
    } else {
        if (newUser.username !== undefined) {
            // 查找成功, 找到重名用户
            res.json({err: 1, msg: "用户名已存在, 请更换用户名重新注册"});
            return
        }
        newUser = {username, password, id: users[users.length - 1].id + 1}
        user.push(newUser);
        res.json({err: 0, msg: "恭喜您, 注册成功"})
    }
    return;
});

// 登录
// app.post("/login", function (req, res) {
//     let {username, password} = req.body;
//     let user = {};
//     user = user.find(item => item.username === username & item.password === password);
//     if (user.username === undefined) {
//     }
// });
