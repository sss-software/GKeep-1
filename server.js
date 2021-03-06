const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

//Bodyparser Middleware
app.use(express.json({ extended: false }));

//Connnect to Mongo
mongoose.connect(process.env.MONGO_URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    })
    .then(()=> console.log('MongoDb Connected..'))
    .catch(err => console.log(`DB Connection Error: ${err.message}`));

//Use Routes
app.use('/api/notes',require('./routes/api/notes'));
app.use('/api/labels',require('./routes/api/label'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server Started on port ${port}`));