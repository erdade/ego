var http = require('http'); // 加载NodeJS http模块
  
// 创建服务器对象
var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain'}); // 设置响应头
    response.write("Hello, World!"); // 设置相应内容
    response.end(); // 结束请求
});
  
server.listen(3000);  // 监听指定端口，需要在ec2 web console中设置允许从指定的TCP端口入站。