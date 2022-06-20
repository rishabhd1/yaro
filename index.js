require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});
const app = express();
app.use(cors());
app.use(express.json());

const routes = require('./routes/routes');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
