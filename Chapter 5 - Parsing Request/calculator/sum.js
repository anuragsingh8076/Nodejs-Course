const sumRequestHandler = (req, res) => {
   console.log("In Sum Request Handler", req.url);
   const Body = [];
   req.on('data', chunk => 
    Body.push(chunk));
     req.on('end', () => {
        const parsedBody = Buffer.concat(Body).toString();
        const params = new URLSearchParams(parsedBody);
        const bodyobj = Object.fromEntries(params);
       const result = Number(bodyobj.num1) + Number(bodyobj.num2);
       console.log(result);
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head><title>Practice set</title></head>
  <body>
    <h1>your sum is ${result}</h1>
    <a href="/">Go to Home</a>
  </body>
    </html>
    `);
    return  res.end();
  });
  
   
   
}


exports.sumRequestHandler = sumRequestHandler;