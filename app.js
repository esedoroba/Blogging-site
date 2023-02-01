const express = require('express')
const app = express()
app.set('view engine', 'ejs')
// Middleware
app.use('/assets', express.static('assets'))
app.use(express.urlencoded({extended: true}));
// Home route
app.get('/', (req, res)=>{
    res.render('index')
})
// add Blogs
app.get('/addBlogs',(req, res) =>{
    res.render('addBlogs', {username: 'Juliet'})
})
// success
app.post('/success',(req,res)=>{
    console.log(req.body)
    res.render('success')
})

// Classwork
// Handle login and register get routes

// login
app.get('/login',(req,res)=>{
    res.render(login)
})

// register
app.get('/register',(req, res)=>{
    res.render(register)
})


// Listener
const port = 3000

app.listen(port, () => {
    console.log(`App has started at port 3000 ${port}`);
})

