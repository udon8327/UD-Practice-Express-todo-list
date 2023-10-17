const express = require('express');
const app = express();
const https = require('https');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, `./env/${ process.env.NODE_ENV }.env`) });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(compression());

let isDBConnected = false;
let error;
mongoose.connect(
  `mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PWD }@cluster-nest.nsgharc.mongodb.net/NestDB?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => {
    isDBConnected = true;
    console.log('Database is connected.')
  })
  .catch(err => {
    error = err;
    console.log(err)
  });

// 首頁
app.get('/', (req, res) => {
  res.send('Hello Mock Api');
})
app.get('/env', (req, res) => {
  res.send(process.env.ENV);
})

// 路由模組化
app.use('/todo', require('./routes/todo'));

// 404
app.get('/404', (req, res) => {
  res.status(404).send('404 找不到頁面')
})
app.all('/*', (req, res) => {
  res.redirect('/404');
})

// *
// app.all('/*', (req, res) => {
//   let temp = {
//     code: "000",
//     data: {},
//     message: "成功"
//   }
//   temp = Object.assign(temp, req.body);
//   res.json(temp);
// })

// 錯誤處理中間件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || err });
});

// SSL憑證
// const options = {
//   key: fs.readFileSync('../ssl/privkey.pem'),
//   cert: fs.readFileSync('../ssl/cert.pem')
// }

// 啟動server
// https.createServer(options, app).listen(process.env.PORT || 3000), () => {
//   console.log(`Server running at https://${config.hostname}:${process.env.PORT}`);
// }

// 啟動server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});

// Export the Express API
module.exports = app;