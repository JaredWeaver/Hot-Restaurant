const express = require('express');
const path = require('path');

const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');


const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static(path.join(__dirname, '/public')));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(htmlRoutes);
app.use(apiRoutes);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
