const whitelist = [
   'https://justride.vercel.app',
   'http://127.0.0.1:5173',
   'http://localhost:8000',
   'http://localhost:5173',
];
const corsOptions = {
   credentials: true,
   optionsSuccessState: 200,
   origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1 || !origin) callback(null, true);
      else callback(new Error('Not allowed by CORS'));
   },
};

module.exports = corsOptions;
