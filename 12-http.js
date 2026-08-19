const http = require('http')

const server = http.createServer((req , res) => {
    if(req.url === '/'){
       return res.end('welcome to our home page');
    }
    if(req.url === '/about')
    {
        return res.end('Here is my about page information')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>we cant seen to find the page what youre looking for</p>
        <a href = "/">back to home</a>`)
})

server.listen(5000)

//it was not working properly when i type the only res.url function throughout the code so there are two ways to resole it.
// 1. write the res.url functionn in the return statement like above code
//2. write the res.url function in the elseif statements

// go through the content more to understand the code properly