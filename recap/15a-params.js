const express = require('express');
const { products } = require('./data');
const app = express();

app.get('/api/products', (req, res) => {
    res.status(200).json({ success: true, data: products });
});


app.get('/api/products/feature', (req, res) => {
    const productname = products.filter(p => p.name === 'Smartwatch');
    res.status(200).json({ success: true, data: productname });
});

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === Number(id));
    //console.log('Product found:', product);
    if (isNaN(Number(id))) {
        return res.status(400).json({ success: false, msg: `Invalid product id ${id}` });
    }
    if (!product) {
        return res.status(404).json({ success: false, msg: `No product with id ${id}` });
    }
    res.status(200).json({ success: true, data: product });
});

// app.get('/api/products/feature', (req, res) => {
//     const productname = products.filter(p => p.name === 'Smartwatch');
//     res.status(200).json({ success: true, data: productname });
// });

app.get('/api/products/:id/reviews/:reviewId', (req, res) => {
    const { id, reviewId } = req.params;
    res.status(200).json({ success: true, data: { productId: id, reviewId: reviewId } });
});


app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});


// Move featured below /:id and visit /api/products/featured. What comes back?
// it says "No product with id featured" because the /:id route is matched first, and it tries to find a product with id "featured", which does not exist.
// Visit /api/products/abc before and after adding the isNaN check.
// it was an error before adding the isNaN check, now it returns a 400 error with a message "Invalid product id abc"
// What does products.find(p => p.id === req.params.id) return without Number()? Why?
// it returns undefined, because req.params.id is a string and p.id is a number, so they are not equal.
