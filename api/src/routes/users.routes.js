const { Router } = require("express");
const UsersControllers = require("../controllers/UsersController");

const usersRoutes = Router();


// function myMiddleware(request, response, next){
//     console.log("passed through middleware");

//     if(!request.body.isAdmin){
//         return response.json({message: "user unauthozired!"});
//     }

//     next();
// }


const usersController = new UsersControllers();

// usersRoutes.use(myMiddleware);
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;