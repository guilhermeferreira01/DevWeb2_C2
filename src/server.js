const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();


mongoose.connect('mongodb+srv://usuario1:a2GvWHRaqN19fI7u@cluster0.dbsab.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
})

app.use(express.json());
app.use(routes);


app.listen(3333);


