if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}
//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const show = console.log;
show('im cool')
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

/////////// SETUP VIEW ENGINE //////////
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//MIDDLEWARE
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// Routes
//____________________
//INDEX//
app.get('/fruits', (req, res) => {
  res.render('Index');
})

//NEW//
app.get('/fruits/new', (req, res) => {
  res.render('New');
})
//DELETE//
app.delete('/fruits/:id', (req, res) => {

})

//UPDATE//
app.put('/fruits/:id', (req, res) => {

})
//CREATE//
app.post('/fruits', (req, res) => {

})

//EDIT//


//SHOW//
app.get('/fruits/:id', (req, res) => {
  res.render('Show');
})

//___________________
//localhost:3000 
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));