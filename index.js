const express = require('express');
const path = require('path');

const shopRouters = require('./shop');
const Router404 = require('./404');

const app = express();
// MIDDLEWARE(S)
// app.use((req, res, next) => {
//     console.log("In the first Middleware")
//     next(); // go to the next middleware
// })

// app.use('/hello', (req, res, next) => {
//     console.log("In the second Middleware")
//     res.send('<h1>Hello World Express.js</h1>'); // if there's send there's no need for next()
// })

app.use(express.urlencoded({ extended: false }))

app.use('/add-products', (req,res) => {
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title" />
            <button type="submit">SEND</button>
        </form>
    `)
})

app.use('/product', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

// // ROUTE
app.use(shopRouters)

// catch all middleware  ---- 404

app.use(Router404)

// {
//     res.status(404);
//     res.send()
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// to parse incoming form data


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started at port ${PORT}`))