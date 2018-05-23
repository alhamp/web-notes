
const morgan = require('morgan');
const express = require('express')
const app = express()
const notes = [
  'eat cake'
];
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send('Web Notes'))

// app.use('/', express.static('views'));
   app.use(morgan('tiny'));
  app.set('view engine', 'ejs');
  app.get('/', (req, res) => {
  res.render('notes', { notes: notes });
});
  app.use('/css', express.static('css'));
  app.use('/js', express.static('js'));
  app.post('/notes', (req, res) => { 
  notes.push(req.body.note);
  res.redirect('/');
});
  app.delete('/notes/:id',(req, res) => {
 if(req.params.id >= 0 && req.params.id < notes.length){
   notes.splice(req.params.id, 1);
   res.send ('***note deleted***');
   res.send();
 }else{
    res.status(404).send('what are you doing');
 }
});
 


app.listen(3000, () => console.log('Example app listening on port 3000!'))
