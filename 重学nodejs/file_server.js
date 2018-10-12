"use strict"
// 'use strict';

// var
//     fs = require('fs'),
//     url = require('url'),
//     path = require('path'),
//     http = require('http');

// // 从命令行参数获取root目录，默认是当前目录:
// var root = path.resolve(process.argv[2] || '.');

// console.log('Static root dir: ' + root);

// // 创建服务器:
// var server = http.createServer(function (request, response) {
//     // 获得URL的path，类似 '/css/bootstrap.css':
//     var pathname = url.parse(request.url).pathname;
//     // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
//     var filepath = path.join(root, pathname);
//     // 获取文件状态:
//     fs.stat(filepath, function (err, stats) {
//         if (!err && stats.isFile()) {
//             // 没有出错并且文件存在:
//             console.log('200 ' + request.url);
//             // 发送200响应:
//             response.writeHead(200);
//             // 将文件流导向response:
//             fs.createReadStream(filepath).pipe(response);
//         } else {
//             // 出错了或者文件不存在:
//             console.log('404 ' + request.url);
//             // 发送404响应:
//             response.writeHead(404);
//             response.end('404 Not Found');
//         }
//     });
// });

// server.listen(8080);

// console.log('Server is running at http://127.0.0.1:8080/');


//http://127.0.0.1:7777/public/index.html
// 搭建成功
var 
    fs=require("fs"),  //文件内容模块
    url=require("url"), //请求资源地址
    path=require("path"), //文件目录
    http=require("http"), //http服务
    hostName="127.0.0.1",
    port="7070";
// // 从命令行参数获取root目录，默认是当前目录:
var root=path.resolve(process.argv[2] || ".");
// console.log(process.argv)
//--[ 'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\重学nodejs\\file_server.js' ]
// console.dir(process.argv)
// console.log("static root dir: "+root)

var server=http.createServer(function(req,res){
    // ？怎么看到了请求了两次，有两次console
    var pathname=url.parse(req.url).pathname;
    var filepath=path.join(root,pathname);//将path模块中的两个
    // console.log(filepath);//D:\重学nodejs\public\index.html
    // console.log(root+pathname);//"D:\重学nodejs"  +   "\public\index.html"
    fs.stat(filepath,function(err,stats){
        if (!err && stats.isFile()){
            console.log("200"+req.url);
            res.writeHead(200);
            fs.createReadStream(filepath).pipe(res);
        }else{
            console.log("404"+req.url);
            res.writeHead(404);
            res.end("404 Not Found");
        }
    });
});
server.listen(port);
console.log("Server is running at     "+hostName+":"+port)