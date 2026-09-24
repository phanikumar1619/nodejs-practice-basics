const express = require('express');
const { products } = require('./data');
const app = express();


app.get('/api/query', (req, res) => {
    const { search, limit, maxPrice , category} = req.query;
    let filteredProducts = [...products];

    if (search) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.name.toLowerCase().startsWith(search.toLowerCase());
        });
    }

    if (maxPrice) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.price <= Number(maxPrice);
        });
    }

    if (category) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.category === category;
        });
    }

    if (limit) {
        filteredProducts = filteredProducts.slice(0, Number(limit));
    }

    res.status(200).json({ success: true,total: filteredProducts.length, data: filteredProducts });
});


app.listen(5000, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
        return;
    }
    console.log('Server is listening on port 5000...');
});


// What is req.query when you visit with no ? at all?
// it is an empty object {}
// ?limit=2 without Number() — try result.slice(0, limit). Does it work? Why is that risky even when it seems to?
// it does not work because limit is a string, and slice expects a number. This can lead to unexpected behavior or errors if the input is not validated or converted to the correct type.
// What should ?limit=abc do? Decide, and make your route do it.
// its gives a empty array because the limit is not a number, so it should return an empty array. You can add a check to ensure that limit is a valid number before slicing the array. If it's not a valid number, you can return an error message or an empty array.