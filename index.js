/*var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Here is the sample node.js application built by TenxCloud.')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})
*/
var http = require('http');
var body = [
      '<head><title>Node app by tenxcloud</title></head>',
      '<div style="14px Lucida Grande, Helvetica, Arial, sans-serif">',
          '<span style="display: inline-block;width: 170px;height: 40px;background: url(https://www.tenxcloud.com/images/index/logo.png) 0 0/95% no-repeat;position: relative;top: 13px;">',
          '</span>',
          '<div style="width:100%;pading:50px 100px;text-align:center;">',
              '<h1>Hello World test!</h1>',
              '<p>Welcome to Node app.</span></p>',
          '</div>',
      '</div>'
   ].join('');
var console_log = console.log;
console.log = function(){
	var date = new Date();
	var tmp = process.stdout;
	process.stdout = process.stderr;
	console_log.apply(console, ['[', date.toLocaleString(), ']'].concat(Array.prototype.slice.call(arguments)));
	process.stdout = tmp;
};
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Length': body.length,'Content-Type': 'text/html' });
    console.log('Test Hi~ I\'m a test log.');
    response.end(body);
}).listen(5000)

console.log('Node app is running at localhost:' + 5000 + '/');
console.log('[info]', 'test webhook')
