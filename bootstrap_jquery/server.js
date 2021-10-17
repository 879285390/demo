//index.js
const WebSocket = require('ws')      //引入ws
const wss = new WebSocket.Server({port: 8088})   //创建WebSocket 服务器并生成实例


wss.on('connection', function connection(ws) {

    console.log("服务端连接成功")

    const json = {status_code: 0,msg: "连接成功"};

    ws.on('message', function incoming(message) {
        console.log("服务器接受到客户端传送的内容" + message);
        ws.send(JSON.stringify(json));       
    });

    // 服务器发送的数据
    // ws.send('这是服务器发送的数据');

});
