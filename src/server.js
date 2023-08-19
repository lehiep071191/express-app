const express = require("express");
const morgan = require("morgan");
const route = require("./routers");
const mongoose = require("mongoose");
const handlebars = require('express-handlebars')
const path = require('path')
require("dotenv").config();


async function bootStrap() {
  const app = express();
  app.use(morgan("combined"));
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  route(app);
  app.engine('handlebars', handlebars.engine());
  app.set('view engine', 'handlebars');
  app.set('views', path.join(process.cwd(), 'views'));

  await mongoose.connect(process.env.MONGO_URL);
  mongoose.Promise = global.Promise

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
}

bootStrap();
