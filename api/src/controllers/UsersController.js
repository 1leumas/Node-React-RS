const AppError = require("../utils/AppError");

class UsersControllers {
    /**
     * index - GET to list various registers;
     * show - GET to show a specific register;
     * create - POST to create a register;
     * update - PUT to update a register;
     * delete - DELETE to remove a register
     */

    create(request, response) {
        const { name, email, password } = request.body;
        if(!name){
            throw new AppError("please enter a name");
        }
        
        response.status(201).json({ name, email, password });
    }

}

module.exports = UsersControllers;