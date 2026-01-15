const sumRequestHandler = (req, res) => {
   console.log("1, In Sum Request Handler", req.url);
   const Body = [];
   let result;
   req.on('data', chunk => {
    Body.push(chunk);
    console.log("2, Chunk Came");
   });

     req.on('end', () => {
      console.log("3, End event came");
      
        const parsedBody = Buffer.concat(Body).toString();
        const params = new URLSearchParams(parsedBody);
        const bodyobj = Object.fromEntries(params);
        result = Number(bodyobj.num1) + Number(bodyobj.num2);
       console.log(result);

  });


  console.log("4, Sending the response");
  
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
  
   
   
}


exports.sumRequestHandler = sumRequestHandler;