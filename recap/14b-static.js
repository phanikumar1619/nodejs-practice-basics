const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.get('/', (req, res) => {
//     res.status(200).send(`
//         <h1>Welcome to our home page</h1>
//         <p>This is the home page.</p>`);
// });

app.get('/about', (req, res) => {
    res.status(200).send(`
    <link rel="stylesheet" href="/styles.css">
    <header class="hero">
        <h2>About Us</h2>
        <p>This is the about page.</p>
    </header>
    <footer class="footer">
        <a href="/">back to home</a>
    </footer>`);
});

app.get('/contact', (req, res) => {
    res.status(200).send(`
    <link rel="stylesheet" href="/styles.css">
    <header class="hero">
        <h2>Contact Us</h2>
        <p>This is the contact page.</p>
    </header>
    <footer class="footer">
        <a href="/">back to home</a>
    </footer>`);
});

app.use((req, res) => {
    res.status(404).send(`
        <link rel="stylesheet" href="/styles.css">
        <header class="hero">
            <h2>Oops!</h2>
            <p>The page you are looking for does not exist.</p>
        </header>
        <footer class="footer">
            <a href="/">back to home</a>
        </footer>`);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});

// app.listen(5001, () => {
//     console.log('Server is listening on port 5001...');
// });

// Visit / — does index.html appear without any app.get('/')?

// yes, index.html appears without any app.get('/') because the express.static middleware serves static files from the 'public' directory, and index.html is the default file that is served when visiting the root URL (/).

// Add app.get('/', ...) after the static line and restart. Which wins, your route or the file? (Whichever is registered first — think about what app.use at the top means.)

// the static file wins because the express.static middleware is registered before the app.get('/') route. When a request is made to the root URL (/), the static middleware checks for a matching file (index.html) in the 'public' directory and serves it before reaching the app.get('/') route.

// Rename index.html to home.html. What does / do now?

// Now, when you visit /, it will return a 404 error because the express.static middleware is looking for index.html by default, and since it has been renamed to home.html, there is no matching file to serve.