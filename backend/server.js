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
