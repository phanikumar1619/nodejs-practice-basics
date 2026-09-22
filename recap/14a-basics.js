const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.status(200).send(`
        <h1>Welcome to our home page</h1>
        <a href = "/about">About</a>
        <a href = "/contact">Contact</a>
        <a href = "/hello">Hello</a>`);
});

app.get('/about', (req, res) => {
    res.status(200).send(`
        <h1>About Us</h1>
        <p>My name is KARUBHUKTHA PHANI KUMAR</p>
        <a href = "/">back to home</a>`);
});

app.get('/contact', (req, res) => {
    res.status(200).send(`
        <h1>Contact Us</h1>
        <p>This is the contact page.</p>
        <p>Contact us at: example@email.com</p>
        <a href = "/">back to home</a>`);
});

app.get('/hello', (req, res) => {
    res.status(200).send('Hello Good Morning user');
});

app.use((req, res) => {
    res.status(404).send(`
        <h1>Oops!</h1>
        <p>The page you are looking for does not exist.</p>
        <a href = "/">back to home</a>`);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});

//question: Move app.listen to the top of the file, above the routes. Restart, visit /about. Does it still work? (It does — think about why: registering routes is instant, and requests only arrive later.)
// yes working perfectly because the app.listen is just starting the server and registering the routes is instant, so it doesn't matter where you place the app.listen in the code. The routes will still be registered and available for requests.

//question: Move your app.use 404 above app.get('/about'). What happens to /about?
// the route is giveing 404 error because the app.use 404 is above the app.get('/about') route.

// question: what will happen if we have two app.get('/about', ...) routes with different text. no one will win. and give the error in the brower.
// app.get('/about', (req, res) => {
//     res.status(200).send(`
//         <h1>About Us</h1>
//         <p>My name is KARUBHUKTHA PAVAN KUMAR</p>
//         <a href = "/">back to home</a>`);
// });
// two app.get('/about', ...) routes with different text. no one will win. and give the error in the brower.
