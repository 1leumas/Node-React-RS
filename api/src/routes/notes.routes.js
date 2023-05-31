const { Router } = require("express");
const NotesControllers = require("../controllers/NotesController");

const notesRoutes = Router();


// function myMiddleware(request, response, next){
//     console.log("passed through middleware");

//     if(!request.body.isAdmin){
//         return response.json({message: "user unauthozired!"});
//     }

//     next();
// }


const notesController = new NotesControllers();

// usersRoutes.use(myMiddleware);
notesRoutes.post("/:user_id", notesController.create);

module.exports = notesRoutes;