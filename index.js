// code away!

const express = require("express")

const app = express()

app.use(express.json())

const postRoutes = require('./posts/postRouter')
const userRoutes = require('./users/userRouter')

app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
  });

const port = 4001
const host = "127.0.0.1" 

app.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`)
})