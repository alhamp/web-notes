
const express = require('express')
const app = express()
const notes = [
  'http is a protocol',
  'http requests have a url, method, header, and body'
];
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send('Web Notes'))

// app.use('/', express.static('views'));
  
  app.set('view engine', 'ejs');
  app.get('/', (req, res) => {
  res.render('notes', { notes: notes });
});
  app.use('/css', express.static('css'));
  app.post('/notes', (req, res) => { 
  notes.push(req.body.note);
  res.redirect('/');
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))
