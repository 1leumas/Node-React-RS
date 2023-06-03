const { Router } = require('express');
const UsersController = require('../controllers/UsersController');
const ensureAuth = require('../middleware/ensureAuth');

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);
usersRouter.put('/',ensureAuth, usersController.update);

module.exports = usersRouter;