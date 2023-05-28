const { Router } = require("express");
const UsersControllers = require("../controllers/UsersController");

const usersRoutes = Router();
const UsersController = new UsersControllers();

usersRoutes.post("/", UsersControllers.create);

module.exports = usersRoutes;