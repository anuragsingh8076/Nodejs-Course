const {sumRequestHandler} = require('./sum')

const requestHandler = (req, res) => {
   console.log(req.url, req.method);
   if (req.url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head><title>Practice set</title></head>
  <body>
    <h1> Welcome to Calculator </h1>
    <a href="/calculator">Go to Calculator</a>
  </body>
    </html>
    `);
    return res.end();

    
   } else if (req.url.toLowerCase() === "/calculator") {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head><title>Practice set</title></head>
  <body>
    <h1>Here is the Calculator</h1>
    <form action="/calculate-result" method="POST">
    <input type="number" id="num1" placeholder="Enter first number"/>
    <input type="number" id="num2" placeholder="Enter second number"/>
    <button type="submit">Add</button>
    </form>
  </body>
    </html>
    `);
    return res.end();
   }else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
     return sumRequestHandler(req, res);
      
   }

     res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head><title>Practice set</title></head>
  <body>
    <h1>404 Page does not Exist</h1>
    <a href="/">Go to Home</a>
  </body>
    </html>
    `);
    return res.end();
}

exports.requestHandler = requestHandler;