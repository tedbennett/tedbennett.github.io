const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const { connection } = mongoose;
connection.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('MongoDB database connection established successfully.');
});

const ideasRouter = require('./routes/ideas');
const blogsRouter = require('./routes/blogs');

app.use('/api/ideas', ideasRouter);
app.use('/api/blogs', blogsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
