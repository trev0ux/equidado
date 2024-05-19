// middleware/proxy.js
export default function (req, res, next) {
    const targetUrl = `https://equidado-008c032b8ff0.herokuapp.com${req.url}`;
    const proxyOptions = {
      hostname: 'equidado-008c032b8ff0.herokuapp.com',
      port: 9300,
      path: req.url,
      method: req.method,
      headers: req.headers
    };
  
    const proxyRequest = http.request(proxyOptions, (proxyRes) => {
      proxyRes.pipe(res);
    });
  
    proxyRequest.on('error', (err) => {
      res.statusCode = 500;
      res.end(err.message);
    });
  
    req.pipe(proxyRequest);
  }
  