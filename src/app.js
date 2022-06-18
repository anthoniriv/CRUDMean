const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//enviroment variable
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const server = app.listen(process.env.PORT || 3000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });

app.use("/api/employees", require('./routes/employees.routes'))

module.exports = app;