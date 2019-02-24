import express from 'express';
import bodyparser from 'body-parser';
import mealRoutes from './routes/mealRoutes';
import menuRoutes from './routes/menuRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('Welcome to isaac Bello\'s Book-A-Meal project');
});

app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/orders', orderRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT);

export default app;
