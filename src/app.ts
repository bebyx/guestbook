import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import index from './controllers/crud/index.js';
import post from './controllers/crud/post.js';
import show from './controllers/crud/show.js';
import login from './controllers/login/show.js';
import signin from './controllers/login/post.js';
import signout from './controllers/login/logout.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static('src/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: true
  })
);

app.get('/login', login);
app.post('/login', signin);
app.post('/logout', signout);

app.get('/', index);
app.post('/', post);
app.get('/:id', show);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
