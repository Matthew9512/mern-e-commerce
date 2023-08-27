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
app.use(helmet());
app.use(cors(corsOptions));
app.use(compression());
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
//       name: 'Dainese Laguna Seca 4 – 4Ride',
//       price: '300',
//       description:
//          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://4ride.pl/data/gfx/pictures/medium/8/2/67428_1.png',
//       category: 'leather-suits',
//       features: false,
//       sale: false,
//       sizesArr: [
//          {
//             size: 'XS',
//             available: 0,
//          },
//          {
//             size: 'S',
//             available: 0,
//          },
//          {
//             size: 'M',
//             available: 0,
//          },
//          {
//             size: 'L',
//             available: 0,
//          },
//          {
//             size: 'XL',
//             available: 0,
//          },
//       ],
//    },
// ]);
