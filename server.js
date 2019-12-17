const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) );
 
// Express HBS engine
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

  res.render( 'home.hbs', {
      nombre: 'illak zapata'
      } );
})

app.get('/about', (req, res) => {

  res.render( 'about.hbs');
})

// app.get('/data', (req, res) => {
    
//   res.send( 'Hola mundo y data!' );
// })
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})