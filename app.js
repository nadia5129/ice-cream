//import the express module
import express from 'express';

//create an instance of express application
const app = express();

//define a port number
const PORT  = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to My Ice Cream Shop!');
});

app.listen(PORT, () => {
    console.log(`Server is running at
        http://localhost:${PORT}`)
});