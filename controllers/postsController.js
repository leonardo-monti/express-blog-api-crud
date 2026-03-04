const posts = require("../data/posts")

function index(req, res) {
    const { tag } = req.query
    if (!tag) {
        return res.json(posts)
    }
    const filtered = posts.filter(post =>
        post.tags.includes(tag)
    )
    return res.json(filtered)
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
    const { title, content, image, tags } = req.body
    const newId = posts.length + 1
    const newPost = {
        id: newId,
        title,
        content,
        image,
        tags,
    }
    posts.push(newPost)
    res.status(201).json(newPost)

}

function update(req, res) {
    const postsId = parseInt(req.params.id)
    const postIndex = posts.findIndex((post) => post.id === postsId)
    const { title, content, image, tags } = req.body
    const updatedPost = {
        id: postsId,
        title,
        content,
        image,
        tags,
    }
    posts[postIndex] = updatedPost
    res.json(updatedPost)
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