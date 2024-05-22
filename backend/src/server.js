import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
}))

app.use('/api/foods', foodRouter);

const PORT = 5001;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});