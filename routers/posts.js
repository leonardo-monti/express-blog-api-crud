const express = require("express")
const router = express.Router()
const posts = require("../data/posts")

// INDEX //

router.get("/", (req, res) => {
    res.json(posts)
})

//SHOW//

router.get("/:id", (req, res) => {
    const id = req.params.id
    res.send(`Dettaglio del post ${id}`)
})

//CREATE//

router.post("/", (req, res) => {
    res.send("Creazione nuovo post")
})

//UPDATE PUT//

router.put("/:id", (req, res) => {
    const id = req.params.id
    res.send(`Modifica del post ${id}`)
})

//UPDATE PATCH//

router.patch("/:id", (req, res) => {
    const id = req.params.id
    res.send(`Modifica parziale del post ${id}`)
})

//DELETE//

router.delete("/:id", (req, res) => {
    const id = req.params.id
    res.send(`Eliminazione del post ${id}`)
})

module.exports = router