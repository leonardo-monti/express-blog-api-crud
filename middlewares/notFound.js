function notFound(req, res, next) {
    res.status(404).json({
        message: "Endpoint Not Found",
        status: 404,
    })
}

module.exports = notFound