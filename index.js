require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const happyHourRoutes = require('./routes/happyHours');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('happyHours: Slash route is working!');
});

app.use('/happyHours', happyHourRoutes);

app.listen(process.env.PORT, () => {
  console.log(`happyHours: Application listening on port no. ${process.env.PORT}...`);
})
