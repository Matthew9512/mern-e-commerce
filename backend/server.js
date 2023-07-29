require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const connectDB = require('./config/mongoDB');
const corsOptions = require('./config/corsOptions');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());
// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use('/products', require('./routes/productsRouter'));
app.use('/users', require('./routes/usersRouter'));

app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`server started`);
});

// const productsModel = require('./models/productsModel');

// productsModel.insertMany([
//    {
//       title: 'dainese boots',
//       price: '100',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       img: 'https://www.4motos.pl/userdata/public/gfx/31722/Buty-Dainese-TORQUE-3-OUT.jpg',
//    },
// ]);
// =========================
// productsModel.insertMany([
//    {
//       title: 'dainese boots',
//       price: '100',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       img: 'https://i.imgur.com/TtrmOME.jpg',
//    },
// ]);
