let express = require("express");
let session =require("express-session"); // 是一个 session 中间件

let app = express();
app.listen(3000);
let bodyParser = require("body-parser");
app.use(bodyParser.json());  // 解析 请求体的中间件  req.body上为 请求后的结果

// cors 跨域  异步兼容,  cors 是第三个一个包 专门解决跨域的

app.use(session({
    resave: true, // 每次重新保存
    secret: "yang",
    saveUninitialized: true // 页面一刷新   req.session 进行设置内容了  req.session.user = 123
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
    else  next();
});
let axios = require("axios");
//  应用场景: 我想访问珠峰的网站  我想访问我的服务, 我的服务访问珠峰的服务,最后把数据返回给我的前端
app.get('/sliders', function (request, response) {
    axios.get('http://html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1516694175474').then(function (res) {
        response.json(res.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list);
    })
});

// 获取课程接口
// 服务器 一共有 20条 接口 第一次获取5条, 下一次 从5条 偏移5条
// offset 偏移, 就是 从第几条开始
// limit 每次取 多少条
// type 课程类型
let lessons = require("./mock/lessons");
app.get("/lessons/:offset/:limit/:type", function (req, res, next) {
    let {offset, limit, type} = req.params;
    // all react vue
    let lists = lessons;
    if (type !== "all") {  // 如果 类型不是 all 就要进行过滤
        lists = lessons.filter((item, index) => {
            return item.type === type;
        })
    }
    offset = parseInt(offset);
    limit = parseInt(limit);
    let newArrs = lists.slice(offset, offset + limit);

    let hasMore = (offset + limit) >= lists.length ? false : true;
    setTimeout(() => {
        res.json({hasMore, list: newArrs});
    }, 500)
});

app.get("/lesson/:id", function (req, res) {
    let {id} = req.params;
    let lesson = lessons.find((item) => {
            return item.id == id
        }) || {};
    res.json(lesson);
});


let userList = [];  // 用户信息
let crypto = require("crypto");
// 先注册 再登录   { user: null , msg:`账号重复`, success:"成功后的提示", err : 1 }
app.post("/reg", function (req, res) {  // {username:"xx", password:"123"}
    let {username, password} = req.body;

    let user = userList.find(item => item.username === username);
    if (user) {
        res.json({user: null, msg: "用户已存在", success: "", err: 1})
    } else {
        // 摘要算法 md5: 不可逆  加密后的长度全部一样 如果有一点不一样, 加密出的结果也不一样;
        password = crypto.createHash('md5').update(password).digest("base64");
        userList.push({username, password});
        res.json({user: username, msg: "", success: "恭喜你,注册成功了", err: 0})
    }
});
app.post("/login", function (req, res) { // {username, password}
    let {username, password} = req.body;
    password = crypto.createHash('md5').update(password).digest("base64");
    let user = userList.find(item => (item.username === username) && (item.password === password));
    if (user) { // 用户存在
        req.session.user = username; // 相当于 登录成功后 将 用户名 保存在 session 中, session是基于cookie的
        res.json({user: username, msg: "", success: "恭喜,登录成功", err: 0});
    } else {  // 用户不存在
        res.json({user: null, msg: "用户或密码不正确", success: "", err: 1})
    }
});

app.get("/validate", function (req, res) {
    // 用于校验 用户 是否登录
    res.json({user:req.session.user, msg:'', err:0,success:""})
});