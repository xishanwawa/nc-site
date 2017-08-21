/**
 * Created by ***
 */
var express = require('express');
var app = express();
 
function renderFullPage(html, initialState) {
      return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>nc-site</title>
          <script src="//cdn.bootcss.com/react/0.14.7/react.min.js"></script>
          <script src="//cdn.bootcss.com/react/0.14.7/react-dom.min.js"></script>
          <script src="//cdn.bootcss.com/immutable/3.8.1/immutable.min.js"></script>
        </head>
        <body>
          <div id='root'>
          </div>
          <script type="text/javascript" src="//localhost:3000/lib/start.js"></script>
        </body>
      </html>
      `
}

app.use(function(req, res){
  res.send(renderFullPage())
});
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})