import express from 'express';
import bodyParser from 'body-parser';
import index from './controllers/crud/index.js';
import post from './controllers/crud/post.js';
import show from './controllers/crud/show.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static('src/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', index);
app.post('/', post);
app.get('/:id', show);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
