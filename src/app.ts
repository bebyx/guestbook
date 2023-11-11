import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import index from './controllers/posts/index.js';
import post from './controllers/posts/post.js';
import show from './controllers/posts/show.js';
import destroy from './controllers/posts/destroy.js';
import login from './controllers/login/show.js';
import signin from './controllers/login/post.js';
import signout from './controllers/login/logout.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static('src/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(
  session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: true
  })
);

app.get('/favicon.ico', (req, res) => res.status(204));


app.get('/login', login);
app.post('/login', signin);
app.post('/logout', signout);

app.get('/', index);
app.post('/', post);
app.get('/:id', show);
app.delete('/:id', destroy);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
