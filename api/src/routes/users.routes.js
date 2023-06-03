const { Router } = require("express");

const UsersControllers = require("../controllers/UsersController");
const ensureAuth = require("../middleware/ensureAuth");

const usersRoutes = Router();

const usersController = new UsersControllers();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", ensureAuth, usersController.update);

module.exports = usersRoutes;