const postData = require('../data/postData')

exports.getPosts = function () {
    return postData.getPosts()
}

exports.getPost = function (id) {
    return postData.getPost(id)
}

exports.savePost = function (post) {
    return postData.savePost(post)
}

exports.updatePost = function (id, post) {
    return postData.updatePost(id, post)
}

exports.deletePost = function (id) {
    return postData.deletePost(id)
}