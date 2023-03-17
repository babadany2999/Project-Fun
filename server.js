const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', async () => {
  console.log("MongoDB database connection established successfully");

  const DietModel = require("./backend/Schemas/test.js");
  await DietModel.save()
  
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
