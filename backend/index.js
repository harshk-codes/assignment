require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/auth");
const port = process.env.PORT || 5000;
const app = express();

//middlewares
app.use(bodyParser.json());
app.use('/auth', authRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});