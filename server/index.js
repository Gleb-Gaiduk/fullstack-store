require('dotenv').config();

const express = require('express');
const sequalize = require('./db');
const models = require('./models/models');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await sequalize.authenticate();
    await sequalize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
