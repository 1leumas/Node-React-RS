const knex = require("../database/knex");
const {compare} = require("bcryptjs");

class SessionsController {


    async create(request, response) {
        const { email, password } = request.body

        const user = await knex("users").where({email}).first();

        if(!user){
            return response.status(401).json("E-mail or password is incorrect");
        }

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched){
            return response.status(401).json("E-mail or password is incorrect");
        }


        return response.json({ user })
    }

}

module.exports = SessionsController