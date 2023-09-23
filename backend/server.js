require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const connectDB = require('./config/mongoDB');
const corsOptions = require('./config/corsOptions');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use('/products', require('./routes/productsRouter'));
app.use('/users', require('./routes/usersRouter'));
app.use('/admin', require('./routes/adminRouter'));

app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`server started`);
});

// const productsModel = require('./models/productsModel');
// productsModel.insertMany([
//    {
//       name: 'Dainese Super Rider',
//       price: '1000',
//       description:
//          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://lagunaseca.pl/pol_pl_Kurtka-motocyklowa-tekstylna-Dainese-Super-Rider-2-Absoluteshell-czarno-bialo-zolta-179527_1.jpg',
//       category: 'jackets',
//       sale: false,
//       sizesArr: [
//          {
//             size: 'XS',
//             available: 10,
//          },
//          {
//             size: 'S',
//             available: 10,
//          },
//          {
//             size: 'M',
//             available: 8,
//          },
//          {
//             size: 'L',
//             available: 9,
//          },
//          {
//             size: 'XL',
//             available: 14,
//          },
//       ],
//    },
// ]);
