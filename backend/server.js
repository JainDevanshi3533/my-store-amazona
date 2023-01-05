import express from 'express';
import data from './data.js';

const app =express();

app.get('/api/products',(req,res)=>{
    res.send(data.products);
})
            //convention to access free ports
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port} `)
})
