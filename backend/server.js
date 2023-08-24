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
// ======================================
//    {
//       name: 'dainese backpack',
//       price: '100',
//       description:
//          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://www.motostyl.pl//pol_pl_Plecak-Dainese-D-Mach-Compact-czarny-2463_1.jpg',
//       category: 'accessories',
//       features: false,
//       sale: false,
//       sizesArr: [
//          {
//             size: 'XS',
//             available: 3,
//          },
//          {
//             size: 'S',
//             available: 4,
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
// =====================================
// const productsModel = require('./models/productsModel');
// productsModel.insertMany([
//    {
//       name: 'dainese boots',
//       price: '600',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://www.4motos.pl/userdata/public/gfx/31722/Buty-Dainese-TORQUE-3-OUT.jpg',
//       category: 'boots',
//       discount: true,
//       sizesArr: [
//          {
//             size: 'XS',
//             available: 8,
//          },
//          {
//             size: 'S',
//             available: 0,
//          },
//          {
//             size: 'X',
//             available: 10,
//          },
//          {
//             size: 'M',
//             available: 6,
//          },
//          {
//             size: 'L',
//             available: 0,
//          },
//          {
//             size: 'XL',
//             available: 6,
//          },
//       ],
//    },
//    {
//       name: 'dainese leather suit',
//       price: '2000',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://www.4motos.pl/userdata/public/gfx/37393/Kombinezon-Dainese-Laguna-Seca-5-1PC.jpg',
//       category: 'leather-suits',
//       discount: false,
//       sizesArr: [
//          {
//             size: 'XS',
//             available: 8,
//          },
//          {
//             size: 'S',
//             available: 0,
//          },
//          {
//             size: 'X',
//             available: 10,
//          },
//          {
//             size: 'M',
//             available: 6,
//          },
//          {
//             size: 'L',
//             available: 0,
//          },
//          {
//             size: 'XL',
//             available: 6,
//          },
//       ],
//    },
//    {
//       name: 'dainese jacket',
//       price: '100',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://lagunaseca.pl/pol_pl_Kurtka-motocyklowa-tekstylna-Dainese-Avro-D2-Tex-bialo-czarno-czerwona-85222_1.png',
//       category: 'jackets',
//       discount: true,
//       sizesArr: [
//          {
//             size: 'XS',
//             available: 8,
//          },
//          {
//             size: 'S',
//             available: 0,
//          },
//          {
//             size: 'X',
//             available: 10,
//          },
//          {
//             size: 'M',
//             available: 6,
//          },
//          {
//             size: 'L',
//             available: 0,
//          },
//          {
//             size: 'XL',
//             available: 6,
//          },
//       ],
//    },
//    {
//       name: 'dainese backpack',
//       price: '100',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://www.motostyl.pl//pol_pl_Plecak-Dainese-D-Mach-Compact-czarny-2463_1.jpg',
//       category: 'accessories',
//       discount: false,
//       sizesArr: [
//          {
//             size: 'XS',
//             available: 8,
//          },
//          {
//             size: 'S',
//             available: 0,
//          },
//          {
//             size: 'X',
//             available: 10,
//          },
//          {
//             size: 'M',
//             available: 6,
//          },
//          {
//             size: 'L',
//             available: 0,
//          },
//          {
//             size: 'XL',
//             available: 6,
//          },
//       ],
//    },
//    {
//       name: 'dainese gloves',
//       price: '100',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://immotion.pl/7169-big_photo/dainese-rekawiczki-hg-caddo.jpg',
//       category: 'gloves',
//       discount: false,
//       sizesArr: [
//          {
//             size: 'XS',
//             available: 8,
//          },
//          {
//             size: 'S',
//             available: 0,
//          },
//          {
//             size: 'X',
//             available: 10,
//          },
//          {
//             size: 'M',
//             available: 6,
//          },
//          {
//             size: 'L',
//             available: 0,
//          },
//          {
//             size: 'XL',
//             available: 6,
//          },
//       ],
//    },
//    {
//       name: 'dainese helmets',
//       price: '100',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://wrosport.pl/img/cms/DAINESE/Kask%20DAINESE%20Linea%2001%20Mips%20Bia%C5%82y%2010.jpg',
//       category: 'helmets',
//       discount: false,
//       sizesArr: [
//          {
//             size: 'XS',
//             available: 8,
//          },
//          {
//             size: 'S',
//             available: 0,
//          },
//          {
//             size: 'X',
//             available: 10,
//          },
//          {
//             size: 'M',
//             available: 6,
//          },
//          {
//             size: 'L',
//             available: 0,
//          },
//          {
//             size: 'XL',
//             available: 6,
//          },
//       ],
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
