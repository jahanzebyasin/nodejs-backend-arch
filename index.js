const express = require('express');
const app = express();

//load the dynamic libs
// const libs = require('./libs');
// libs.forEach(lib => require(`./libs/${lib}`)(app));


const application = require('./application');
Object.keys(application).forEach(key => {
    app.use(`/${key}`, require(application[key]));
});

app.listen(3000, () => {
console.log('Server running');
});