const express = require('express');
const path = require('path');
const { people } = require('./data');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// define a route to serve in SSR (Server-Side Rendering) the data from the people array in html format and css format
app.get('/people', (req, res) => {
    const peopleList = people.map(person => `<li>${person.name} - ${person.age} - ${person.city}</li>`).join('');
    res.status(200).send(`
        <link rel="stylesheet" href="/styles.css">
        <header class="hero">
            <h1>People</h1>
        </header>
        <ul>
            ${peopleList}
        </ul>
    `);
});

// Define a route to serve the people data as JSON
app.get('/api/people', (req, res) => {
    // res.send(people);  the data is sent as JSON by default, but we can also use res.json() to explicitly send JSON data
    // res.send('hello'); the content type is set to text/html text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7 by default, but we can also use res.json() to explicitly send JSON data
    // res.json('hellp'); the content type is set to application/json by default, and it send hello in JSON data
    res.status(200).json({ success: true, data: people });
});

app.get('/api/people/count', (req, res) => {
    res.status(200).json({ success: true, total: people.length });
});

app.get('/api/people/first', (req, res) => {
    res.status(200).json({ success: true, data: people[0] });
});

app.get('/api/people/broken', (req, res) => {
    res.status(500).json({ success: false, msg: 'Internal Server Error: Something went wrong!' });
});


// the /api is sendind the general html error page, its important to write the /api error handler before the general error handler, otherwise the /api will send the general html error page instead of the json error page
// app.use((req, res) => {
//     res.status(404).send(`
//         <link rel="stylesheet" href="/styles.css">
//         <header class="hero">
//             <h1>404 - Page Not Found</h1>
//         </header>
//     `);
// });

// Handle 404 errors for undefined routes for the API
app.use('/api', (req, res) => {
    res.status(404).json({ success: false, msg: `no API route for ${req.originalUrl}` });
});

// Handle 404 errors for SSR undefined routes
app.use((req, res) => {
    res.status(404).send(`
        <link rel="stylesheet" href="/styles.css">
        <header class="hero">
            <h1>404 - Page Not Found</h1>
        </header>
    `);
});


// Start the server
app.listen(5000, (err) => {
    if (err) {
        console.log('could not start server:', err.message);
        return;
    }
    console.log('Server is listening on port 5000...');
});

// Change /api/people to use res.send(people). What Content-Type comes back? Now try res.send('hello') versus res.json('hello'). What's different?
// Add joined: new Date() to one person in data.js. What does it look like in /api/people? Is it still a date?
// {"joined":"2022-01-01T00:00:00.000Z"}
// Add nickname: undefined to one person. Does nickname appear in the JSON?
// the nickname does not appear in the JSON, because undefined values are not included in JSON serialization. {"joined":"2022-01-01T00:00:00.000Z","id":6,"name":"Alice Brown","age":29,"city":"Philadelphia"}
// Move your general HTML 404 above the /api 404. What does /api/xyz return now, and why?