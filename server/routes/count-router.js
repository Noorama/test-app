const express = require('express')

const CountCtrl = require('../controllers/count-ctrl')

const router = express.Router()

router.post('/count', CountCtrl.createCount)
router.get('/count', CountCtrl.getCountSum)

module.exports = router