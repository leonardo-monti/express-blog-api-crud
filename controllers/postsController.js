const posts = require("../data/posts")

function index(req, res) {
    res.json(posts)
}

function show(req, res) {
    const id = req.params.id
    res.send(`Dettaglio del post ${id}`)
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
    const id = req.params.id
    res.send(`Eliminazione del post ${id}`)
}

module.exports = { index, show, store, update, modify, destroy }