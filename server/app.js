const express = require("express");
const app = express();
const ErrorHandler = require("./middlewares/Error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const cors = require("cors")
app.use(cors())
app.use(express.json());

app.use(cookieParser());
app.use("/", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}

const user = require("./controllers/user");
const productRoutes = require("./controllers/product")
app.use("/api/products",productRoutes)
app.use("/api/v2/user", user);
app.use("/uploads", express.static("uploads"));

// Middleware for Errors
app.use(ErrorHandler);

module.exports = app;
