const http = require('http');
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '..', 'content', 'notes.txt');
const server = http.createServer( async (req , res) => {
    if(req.url === '/'){
        res.writeHead(200 , {'content-type' : 'text/html'});
        res.write(`
            <h1>Welcome to our home page</h1>
            <a href = "/about">About</a>
            <a href = "/notes">Notes</a>`);
        return res.end();
    }
    if(req.url === '/about')
    {
        res.writeHead(200 , {'content-type' : 'text/html'});
        res.write(`
            <h1>About Us</h1>
            <p>This is the about page.</p>
            <a href = "/">back to home</a>`);
        return res.end();
    }
    if(req.url === '/notes')
    {
        try {
            const data = await fs.promises.readFile(filepath , 'utf-8');
            res.writeHead(200 , {'content-type' : 'text/html'});
            res.write(`
                <h1>Notes</h1>
                <ol>${data.split('\n').filter((line) => line.trim() !== '').map((note, ex) => `<li> ${note}</li>`).join('')}</ol> // this was the heart of this file so remember it properly
                <a href = "/">back to home</a>`);
            return res.end();
        } catch (err) {
            console.log('[/notes] error:', err.message);
            res.writeHead(500, {'content-type' : 'text/html'});
            res.write(`
                <h1>Oops!</h1>
                <p>Something went wrong while reading the notes.</p>
                <a href = "/">back to home</a>`);
            return res.end();
        }
    }
    res.writeHead(404, {'content-type' : 'text/html'});
    res.write(`
        <h1>Oops!</h1>
        <p>we cant seem to find the page what youre looking for</p>
        <a href = "/">back to home</a>`);
    return res.end();

});

server.listen(5000 , () => {
    console.log('server is listening on port 5000...');
});