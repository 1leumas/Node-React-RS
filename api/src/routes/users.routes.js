const { Router } = require('express');
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const UsersController = require('../controllers/UsersController');
const ensureAuth = require('../middleware/ensureAuth');

const usersRouter = Router();
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController();

usersRouter.post('/', usersController.create);
usersRouter.put('/',ensureAuth, usersController.update);
usersRouter.patch("/avatar", ensureAuth, upload.single("avatar"), (req, res) => {
    console.log(req.file.filename);
    res.json();
})

module.exports = usersRouter;