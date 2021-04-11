import * as express from 'express';
import PostRouter from './routes/post';
import AuthRouter from './routes/auth';
import mongoose from 'mongoose';
const db = mongoose.connection;
const app = express();

let MongoDB_URI =
  process.env.mongoDB_URI ||
  'mongodb://127.0.0.1:27017/mts-technonatura-server';
mongoose.connect(MongoDB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// app.use(express.json());

// db.on('error', (err) => console.error('error when connecting to db'));
// db.once('open', () => console.log('connected to mongoose'));

// app.use('/', PostRouter);
// app.use('/', AuthRouter);

app.get('/', (req, res) => {
  res.json({ message: 'hey' });
});
app.listen(process.env.PORT || 3000, () => {});