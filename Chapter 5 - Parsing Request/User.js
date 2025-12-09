
const fs = require('fs');
 
 const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  
  if (req.url === '/') {
         res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1> Enter Your Details: </h1>');
  res.write('<form action="/submit-details" method="POST">');
  res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
  res.write('<label for="male">Male</label>')
  res.write('<input type="radio" id="male" name="gender" value="male" />')
   res.write('<label for="female">Female</label>')
  res.write('<input type="radio" id="female" name="gender" value="female" />')
  res.write('<br><button type="submit">Submit</button>');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
   return res.end();
  } else if (req.url.toLowerCase() === '/submit-details' && req.method == "POST") {
     

    const Body = [];
  req.on('data', chunk => {
    console.log(chunk);
    Body.push(chunk);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(Body).toString();
    console.log(parsedBody);
    const params = new URLSearchParams(parsedBody);
    // const jsonUbject = {};
    // for (const [key, value] of params.entries()) {
    //   jsonUbject[key] = value;
    // }
    const jsonUbject = Object.fromEntries(params);
      console.log(jsonUbject);
       fs.writeFileSync('user.txt', JSON.stringify(jsonUbject));
  });
   
     res.statusCode = 302;
     res.setHeader('Location', '/');
  }
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1> My first Page </h1></body>');
  res.write('</html>');
  res.end();
 // process.exit();  // Stops event loop 
  
};
module.exports = userRequestHandler;
