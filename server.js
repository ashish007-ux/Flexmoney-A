// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const MONGO_URL = process.env.MONGO_URL
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const yogaSchema = new mongoose.Schema({
  name: String,
  age: Number,
  batchTime: String,
});

const YogaModel = mongoose.model('Yoga', yogaSchema);

app.use(cors()); // Enable CORS

app.use(bodyParser.json());
app.post('/', async (req, res) => {
  try {
    const { name, age, batchTime } = req.body;

    if (age < "18" || age > "65") {
      return res.status(400).json({ error: 'Invalid age range' });
    }
    console.log(name, age, batchTime)

    const yogaEntry = new YogaModel({ name, age, batchTime });
    await yogaEntry.save();

    res.status(200).json({ message: 'Enrollment successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
