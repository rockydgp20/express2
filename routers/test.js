const express = require('express');
const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/AlienDBex'
const app = express();
mongoose.connect(dbUrl, { useNewUrlParser: true });

const con = mongoose.connection

con.on('open', () =>{
    console.log('Connected...');
})
app.use(express.json())
const alienRouter = require('./routers/aliens')
app.use('/aliens', alienRouter)
app.listen(3000, () => {
    console.log('Server Started');
})