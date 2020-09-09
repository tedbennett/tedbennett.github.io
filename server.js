const express = require('express');
const path = require('path');
// const cors = require('cors');
const mongoose = require('mongoose');
// const helmet = require('helmet');
// const morgan = require('morgan');

require('dotenv').config();

const app = express();

// app.use(helmet());
// app.use(morgan('tiny'));
// app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/cow', (req, res) => {
  res.send("Moo")
})

const ideasRouter = require('./routes/ideas');
const blogsRouter = require('./routes/blogs');

app.use('/api/ideas', ideasRouter);
app.use('/api/blogs', blogsRouter);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const { connection } = mongoose;
connection.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('MongoDB database connection established successfully.');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
//   // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
