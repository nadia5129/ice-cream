//import the express module
import express from 'express';

//create an instance of express application
const app = express();

//define a port number
const PORT  = 3000;

// 
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running at
        http://localhost:${PORT}`)
});