import * as dotenv from 'dotenv';
import * as express from 'express';
import * as handlebars from 'express-handlebars';

const app = express();

app.use(express.static('public'));

app.engine('handlebars', handlebars({
  defaultLayout: false
}));
app.set('view engine', 'handlebars');

app.get('/', (request, response) => {
  response.render('index', { title: 'Home' });
});

app.get('/category', (request, response) => {
  response.render('category', { title: 'Category' });
});

module.exports = app;
