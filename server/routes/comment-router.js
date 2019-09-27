const express = require('express')

const CommentCtrl = require('../controllers/comment-ctrl')

const router = express.Router()

router.post('/comment', CommentCtrl.createComment)
router.put('/comment/:id', CommentCtrl.updateComment)
router.delete('/comment/:id', CommentCtrl.deleteComment)
router.get('/comment/:id', CommentCtrl.getCommentById)
router.get('/comment', CommentCtrl.getComments)

module.exports = router