require('dotenv').config();
const express = require("express");
var path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const Sequelize = require("sequelize");
const session = require('express-session');
const app = express();



var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'app/public')));

const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const dbc = require("./app/models");
// const Role = dbc.role;
// dbc.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });
// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "moderator"
//   });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// };
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/index.routes')(app);
require('./app/routes/khoa.routes')(app);
require('./app/routes/chuyennghanh.routes')(app);
require('./app/routes/bacdaotao.routes')(app);
require('./app/routes/hedaotao.routes')(app);
require('./app/routes/khoadaotao.routes')(app);
require('./app/routes/banner.routes')(app);
require('./app/routes/tintuc.routes')(app);
require('./app/routes/lop.routes')(app);
require('./app/routes/giangvien.routes')(app);
require('./app/routes/detai.routes')(app);
require('./app/routes/sinhvien.routes')(app);
require('./app/routes/chude.routes')(app);
require('./app/routes/hoidong.routes')(app);



//front_end
require('./app/routes/frontend/trangchu.routes')(app);
require('./app/routes/frontend/detai.routes')(app);
require('./app/routes/frontend/sinhvien.routes')(app);
require('./app/routes/frontend/giangvien.routes')(app);
require('./app/routes/frontend/tintuc.routes')(app);
require('./app/routes/frontend/lienhe.routes')(app);
require('./app/routes/frontend/dangnhap.routes')(app);
