const people = [
    { id : 1, name: 'John Doe', age: 30 , city: 'New York'},
    { id : 2, name: 'Jane Smith', age: 25 , city: 'Los Angeles'},
    { id : 3, name: 'Mike Johnson', age: 35 , city: 'Chicago'},
    { id : 4, name: 'Emily Davis', age: 28 , city: 'Houston'},
    { id : 5, name: 'David Wilson', age: 32 , city: 'Phoenix'},
    { joined: new Date('2022-01-01') , nickname: undefined, id : 6, name: 'Alice Brown', age: 29 , city: 'Philadelphia'},
];

const products = [
    { id : 1, name: 'Laptop', price: 999.99 , category: 'Electronics'},
    { id : 2, name: 'Smartphone', price: 699.99 , category: 'Electronics'},
    { id : 3, name: 'Tablet', price: 399.99 , category: 'Electronics'},
    { id : 4, name: 'Headphones', price: 199.99 , category: 'Electronics'},
    { id : 5, name: 'Smartwatch', price: 299.99 , category: 'Electronics'},
];

module.exports = { people, products };