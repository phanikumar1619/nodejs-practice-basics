const express = require('express');
const app = express();
const fs = require('fs/promises');
const path = require('path');

const filepath = path.join(__dirname, '..', 'content', 'notes.txt');


app.get('/', (req, res) => {
    return res.status(200).send(`
        <h1>Welcome to our home page</h1>
        <a href = "/about">About</a>
        <a href = "/notes">Notes</a>`);
});

app.get('/about', (req, res) => {
    return res.status(200).send(`
        <h1>About Us</h1>
        <p>This is the about page.</p>
        <a href = "/">back to home</a>`);
});

app.get('/notes', async (req, res) => {
    try {
        const data = await fs.readFile(filepath, 'utf-8');
        return res.status(200).send(`
            <h1>Notes</h1>
            <ol>${data.split('\n').filter((line) => line.trim() !== '').map((note) => `<li> ${note}</li>`).join('')}</ol>
            <a href = "/">back to home</a>`);
    } catch (err) {
        console.log('[/notes] error:', err.message);
        return res.status(500).send(`
            <h1>Oops!</h1>
            <p>Something went wrong while reading the notes.</p>
            <a href = "/">back to home</a>`);
    }
});

app.get('/api/notes', async (req, res) => {
    try {
        const data = await fs.readFile(filepath, 'utf-8');  
        const notes = data.split('\n').filter((line) => line.trim() !== '');
        return res.status(200).json(notes);
    } catch (err) {
        console.log('[/api/notes] error:', err.message);
        return res.status(500).json({ error: 'Something went wrong while reading the notes.' });
    }
});

app.get('/notes/:id', async (req, res) => {
    try {
        const data = await fs.readFile(filepath, 'utf-8');
        const notes = data.split('\n').filter((line) => line.trim() !== '');
        const noteId = parseInt(req.params.id, 10);
        if (noteId >= 1 && noteId <= notes.length) {
            return res.status(200).json({ id: noteId, content: notes[noteId - 1] });
        } else {
            return res.status(404).json({ error: 'Note not found.' });
        }
    } catch (err) {
        console.log('[/notes/:id] error:', err.message);
        return res.status(500).json({ error: 'Something went wrong while reading the note.' });
    }
});

app.use((req, res) => {
    return res.status(404).send(`
        <h1>Oops!</h1>
        <p>we cant seem to find the page what youre looking for</p>
        <a href = "/">back to home</a>`);
});

app.listen(5000, () => {
    console.log("server is listening on port 5000...");
});