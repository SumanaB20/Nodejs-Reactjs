var http = require('http');
const fetch = require('node-fetch');

//create a server object:
http.createServer(function (req, res) {
    var url = req.url;
    if (url === '/user') {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(json => {
                if (json) {
                    res.write(JSON.stringify(json))
                    res.end(); //end the response
                }
                console.log(json);
            });
    } else {
        res.write('Hello World!'); //write a response
        res.end(); //end the response
    }
}).listen(3001, function () {
    console.log("server start at port 3001"); //the server object listens on port 3000
});