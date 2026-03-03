const express = require("express")
const app = express()
const port = 3000
const appUrl = `http://localhost:${port}`
const postsRouter = require("./routers/posts")

app.get("/", (req, res) => {
    res.send("Server del mio Blog")
})

app.use("/posts", postsRouter)

app.listen(port, () => {
    console.log(`Server listening on ${appUrl}`)
})