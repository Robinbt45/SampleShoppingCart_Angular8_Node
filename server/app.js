import express from 'express'
let app = express();
import cors from 'cors'
let db = require('./db.js');
let port = process.env.port || 5000;

app.use(cors());
let ShoppingRouter = require('./routes');
app.use('/cart', ShoppingRouter)


app.get('/',(req,res) => {
    res.status(200).send('Api is working')
});

app.listen(port,()=> {
    console.log('Express server listing on port'+ port)
});