//const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require('../database/sqlite');

class UsersControllers {
    /**
     * index - GET to list various registers;
     * show - GET to show a specific register;
     * create - POST to create a register;
     * update - PUT to update a register;
     * delete - DELETE to remove a register
     */

    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();
        const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (checkUserExist) {
            throw new AppError("this email is already in use.");
        }
        //const hashedPassword = await hash(password, 8)

        await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, password]
        );

        return response.status(201).json();
    }

    async update(request, response) {
        const { name, email } = request.body;
        const { id } = request.params;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        if (!user) {
            throw new AppError("User not found");
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("this email is already in use.");
        }

        user.name = name;
        user.email = email;

        await database.run(`UPDATE users SET 
        name = ? 
        email = ? 
        updated_at = ? 
        WHERE id = ?`,
            [user.name, user.email, new Date(), id]);

        return response.status(200).json()
    }

}

module.exports = UsersControllers;