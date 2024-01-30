
import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 3002;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.set('strictQuery', true);


async function connectToDatabase() {
  await mongoose.connect(`${MONGODB_URI}`);
  console.log('MongoDB connected successfully');
};

console.log("test")

connectToDatabase();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});