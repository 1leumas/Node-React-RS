const { hash, compare } = require("bcryptjs");
//const AppError = require("../utils/AppError");
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
        const checkUserExist = await database.get("SELECT * FROM users WHERE email = ?", [email]);

        if (checkUserExist.id) {
            response.statusMessage = "User already exists"
            return response.status(400).json();
        }

        const hashedPassword = await hash(password, 8)

        await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword]
        );

        return response.status(201).json();
    }

    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const { id } = request.params;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = ?", [id]);

        if (!user) {
            response.statusMessage = "User not found"
            return response.status(400).json();
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = ?", [email]);

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            response.statusMessage = "this email is already in use."
            return response.status(400).json();
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if (password && !old_password) {
            response.statusMessage = "you need to confirm the old password to define a new one"
            return response.status(400).json();
        }
        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);
            if (!checkOldPassword) {
                response.statusMessage = "Old password is invalid"
                return response.status(400).json();
            }

            user.password = await hash(password, 8);
        }


        await database.run(`UPDATE users SET 
        name = ?,
        email = ?,
        password = ?,
        updated_at = DATETIME('now')
        WHERE id = ?`,
            [user.name, user.email, user.password, id]);

        return response.status(200).json()
    }

}

module.exports = UsersControllers;