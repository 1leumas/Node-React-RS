const { Router } = require("express");
const UsersControllers = require("../controllers/UsersController");

const usersRoutes = Router();


function myMiddleware(request, response, next){
    console.log("passed through middleware");

    if(!request.body.isAdmin){
        return response.json({message: "user unauthozired!"});
    }

    next();
}


const UsersController = new UsersControllers();

usersRoutes.use(myMiddleware);
usersRoutes.post("/", UsersControllers.create());

module.exports = usersRoutes;