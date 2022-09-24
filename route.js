
const fs = require("fs");
const requestListener = (req, res)  => {
    console.log("worked");
    const url = req.url;
    const method = req.method;

    if(url === "/"){
        res.write('<html>');
        res.write('<head><title>Create User</title><head>');
        res.write('<form action="/create-user" method="POST" > <input name="username" type="text" placeholder="username">  </input> <button type="submit"> create </button></form>');
        res.write('</html>');
        return res.end();

    }
    if(url === "/create-user" && method === "POST"){
        const body =  [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody= Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            res.end();
        })

    }

    if(url === "/users"){
        res.write('<html>');
        res.write('<head><title>Users</title><head>');
        res.write('<ul><li>User 1</li> <li>User 2</li> <li>User 3</li></ul>');
        res.write('</html>')
        res.end();

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>')    
    res.end();
    

}

module.exports.listener = requestListener;