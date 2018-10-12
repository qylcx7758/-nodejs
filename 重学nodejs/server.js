var http=require("http");
var url=require("url");
var hostName="127.0.0.1";
var port="7777";
var server= http.createServer(function(req,res){
//     res.setHeader("Access-Control-Allow-Origin", "*"); 
// res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
// res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// res.setHeader("X-Powered-By",' 3.2.1');
// res.setHeader("Content-Type", "text/html"); 

    res.setHeader("Content-Type","text/plain");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    //    res.setHeader('Content-Type','text/plain');
    //    console.log(url.parse("http://localhost:7070/user?name=%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B&url=www.runoob.com"))
    //    var o=url.parse(req.url)
    //    for (var k in o){
    //     res.write(k+"\n")     
    // }
    //    console.log("连接成功")
    //    console.dir(o)
    // //    
    //    console.table(o)  //不支持console.table方法
    //    console.log(o)  //log不再是缩写的obj，而是铺展开，同dir 
    var objStr=JSON.stringify(testObj())
       
       res.write(objStr)
      res.end("");
    //   必须有返回值，同Ip,端口，同协议请求成功了，只是被end
   
})
function testObj(){
    var obj={
        a:"01",
        b:"b",
        c:"c"
    }
    return obj;
}
server.listen(port,hostName,function(){
    console.log("服务器运行在   http://"+hostName+":"+port)
})
//     // res.setHeader('Content-Type','text/plain');
    // res.setHeader('Access-Control-Allow-Origin',"*")
    // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    // res.end("hello nodejs");
console.log("服务器运行Ok")
// console.log(server)