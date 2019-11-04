const http = require('http'),
    httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
});
proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('Origin', 'http://localhost:5000');
});


const server = http.createServer((req, res) => {
  proxy.web(req, res, {
    target: 'http://localhost:21325'
  });
});

const listen_port = process.env.PORT || 5000;
server.listen(listen_port, (err) => {
  if (err) {
    console.error("Unable to listen " + err);
  } else {
    console.log("Proxy is listening port " + listen_port);
  }
});

