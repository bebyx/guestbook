import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import index from './controllers/crud/index.js';
import post from './controllers/crud/post.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', index);
app.post('/', post);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
