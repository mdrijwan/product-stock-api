import express from 'express';
const router = express.Router();
const userController = require('../api/controllers/usersController');


router.post('/register', userController.create);
router.post('/login', userController.authenticate);

module.exports = router;