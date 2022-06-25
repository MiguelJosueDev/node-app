const express = require('express');

// Routers
const { registrationsRouter } = require('./routes/registrations.routes');

// Utils

const { db } = require('./utils/database.util')

// Init app

const app = express(); // this contains the express library

// Accept incoming json data

app.use(express.json())

// EndPoints 
app.use('api/v1/registrations', registrationsRouter ); // this allows us to use json in our requests

db.authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err)); // this will check if the connection is correct

db.sync()
    .then(() => console.log('Database synced successfully'))
    .catch(err => console.log(err));

app.listen(5000, () => {
    console.log('listening on port 5000');
}
);
