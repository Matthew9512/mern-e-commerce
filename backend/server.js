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

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(cookieParser());
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
//       name: 'Dainese Impeto Motorcycle Gloves',
//       price: '300',
//       description:
//          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/5D64/DB29/41E3/5DE7/21AB/AC1E/1405/4CA5/201815927_620_1_1.jpg',
//       category: 'gloves',
//       features: false,
//       sale: false,
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
// productsModel.insertMany([
//    {
//       name: 'dainese boots',
//       price: '600',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://www.4motos.pl/userdata/public/gfx/31722/Buty-Dainese-TORQUE-3-OUT.jpg',
//       category: 'boots',
//       discount: true,
//    },
//    {
//       name: 'dainese leather suit',
//       price: '2000',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://www.4motos.pl/userdata/public/gfx/37393/Kombinezon-Dainese-Laguna-Seca-5-1PC.jpg',
//       category: 'leather-suits',
//       discount: false,
//    },
//    {
//       name: 'dainese jacket',
//       price: '100',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://lagunaseca.pl/pol_pl_Kurtka-motocyklowa-tekstylna-Dainese-Avro-D2-Tex-bialo-czarno-czerwona-85222_1.png',
//       category: 'jackets',
//       discount: true,
//    },
//    {
// name: 'dainese backpack',
// price: '100',
// description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
// image: 'https://www.motostyl.pl//pol_pl_Plecak-Dainese-D-Mach-Compact-czarny-2463_1.jpg',
// category: 'accessories',
// discount: false,
//    },
//    {
//       name: 'dainese gloves',
//       price: '100',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://immotion.pl/7169-big_photo/dainese-rekawiczki-hg-caddo.jpg',
//       category: 'gloves',
//       discount: false,
//    },
//    {
//       name: 'dainese helmets',
//       price: '100',
//       description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, commodi.',
//       image: 'https://wrosport.pl/img/cms/DAINESE/Kask%20DAINESE%20Linea%2001%20Mips%20Bia%C5%82y%2010.jpg',
//       category: 'helmets',
//       discount: false,
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
