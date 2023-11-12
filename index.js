import express from 'express';
import bodyParser from 'body-parser';

import path from "path"
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

let blogs = [];

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
const __dirname = path.dirname(fileURLToPath(import.meta.url));



app.get('/', (req, res) => {
  res.render('index', { blogs });
});

app.get('/health', (req, res) => {
  res.render('health.ejs');
});

app.get('/tech', (req, res) => {
  res.render('tech.ejs');
});
app.get('/travel', (req, res) => {
  res.render('travel.ejs');
});
app.get('/createPost', (req, res) => {
  res.render('createPost.ejs', );
});

app.get('/about', (req, res) => {
  res.render('about.ejs', );
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs', );
});



app.get('/blogs/:blogId', (req, res) => {
  const blogId = req.params.blogId;
  const blog = blogs.find(b => b.id === blogId);
  if (blog) {
   
    res.render('Blogs/blogDetails', { blog });
  } else {
    
    try {
      res.render("Blogs/" + blogId);
    } catch (error) {
      
      res.status(404).send('Blog not found');
    }
  } 
});


app.post('/create', (req, res) => {
  const { title, author, date, content } = req.body;
  const newBlog = {
    id: `blog-${Date.now()}`,
    title,
    author,
    date,
    content
  };
  blogs.push(newBlog);
  res.redirect('/');
});

app.get('/edit/:blogId', (req, res) => {
  const blog = blogs.find(b => b.id === req.params.blogId);
  res.render('editPost', { blog });
});

app.post('/update/:blogId', (req, res) => {
  const { title, author, date, content } = req.body;
  blogs = blogs.map(blog => {
    if (blog.id === req.params.blogId) {
      return { ...blog, title, author, date, content };
    }
    return blog;
  });
  res.redirect('/');
});

app.post('/delete/:blogId', (req, res) => {
  blogs = blogs.filter(blog => blog.id !== req.params.blogId);
  res.redirect('/');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
