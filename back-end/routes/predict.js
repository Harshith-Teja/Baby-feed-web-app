const express = require('express');
const router = express.Router();
const predictController = require('../controllers/predictController');

router.post('/', predictController.predictDisease);

module.exports = router;