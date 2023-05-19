require('dotenv').config()
require('express-async-errors')
const express = require('express');
const hbs = require('hbs')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000
const connectDB = require('./server/db/connect')
const homeRouter = require('./server/routes/index')
const helpers = require('./components/hbshelpers');
const publicDirectoryPath = path.join(__dirname, './public/')

//middlewares
app.use(express.static(publicDirectoryPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//hbs reg
hbs.registerPartials(path.join(__dirname, '/views/partials'));

for (let helper in helpers) {
    hbs.registerHelper(helper, helpers[helper]);
}

//view engines
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

///routers
app.use(homeRouter)



















const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI, console.log('database CONNECTED'))

        app.listen(port, console.log(`server listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}
start();