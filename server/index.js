require('dotenv').config();

const express = require('express');
const sequalize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

// Last middleware
app.use(errorHandler);

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
