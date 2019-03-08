import express from 'express';
import bodyparser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
// route files
import mealRoutes from './routes/mealRoutes';
import menuRoutes from './routes/menuRoutes';
import orderRoutes from './routes/orderRoutes';
import catererRoutes from './routes/catererRoutes';
import userRoutes from './routes/userRoutes';

// db file
import { db } from './models/index';

// models fiels
import Order from './models/order';
import User from './models/user';
import Caterer from './models/caterer';
import Meal from './models/meal';
import Menu from './models/menu';

import swaggerDocument from './swagger.json';

Order.belongsTo(User);
Order.belongsTo(Meal);

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// creating db associations
Caterer.hasMany(Meal);
Caterer.hasOne(Menu);


// associations can be defined here
Meal.hasMany(Order);
Meal.belongsTo(Caterer);

// associations can be defined here
Menu.belongsTo(Caterer);


Order.belongsTo(User);
Order.belongsTo(Meal);


// associations can be defined here
User.hasMany(Order);


app.get('/', (req, res) => {
  res.send('Welcome to isaac Bello\'s Book-A-Meal project');
});

app.use('/api/v1/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/ap1/v1/caterer/auth', catererRoutes);
app.use('/ap1/v1/auth', userRoutes);

const PORT = process.env.PORT || 5500;
db.sync()
  .then(() => {
    console.log('DB connected');
    app.emit('appStarted');
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
export default app;
