const route = require('express').Router();
const { register, login, logout } = require('../controllers/AuthController');
const verifyToken = require('../middleware/AuthMiddleware');

route.post('/register', register);
route.post('/login', login);
route.post('/logout', verifyToken, logout);
module.exports = route;