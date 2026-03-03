const posts = require("../data/posts")

function index(req, res) {
    res.json(posts)
}

function show(req, res) {
    const postsId = parseInt(req.params.id)
    const post = posts.find((post) => post.id === postsId)
    if (!post) {
        return res.status(404).json({
            message: `Post ${postsId} non trovato`,
            success: false,
        })
    }
    return res.json(post)
}

function store(req, res) {
    res.send("Creazione nuovo post")
}

function update(req, res) {
    const id = req.params.id
    res.send(`Modifica del post ${id}`)
}

function modify(req, res) {
    const id = req.params.id
    res.send(`Modifica parziale del post ${id}`)
}

function destroy(req, res) {
    const postsId = parseInt(req.params.id)
    const postIndex = posts.findIndex((post) => post.id === postsId)
    if (postIndex === -1) {
        return res.status(404).json({
            message: `Post ${postsId} non trovato`,
            success: false,
        })
    }
    posts.splice(postIndex, 1)
    console.log("Lista aggiornata:", posts)
    res.sendStatus(204)
}

module.exports = { index, show, store, update, modify, destroy }