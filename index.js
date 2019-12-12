// code away!

const express = require("express")

const app = express()

app.use(express.json())

const postRoutes = require('./posts/postRouter')
const userRoutes = require('./users/userRouter')

app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
    res.json({
        name: "First Heroku Site",
        test: process.env.TEST,
    });
  });


const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 4001


app.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`)
})