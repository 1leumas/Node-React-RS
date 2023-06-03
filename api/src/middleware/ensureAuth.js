const {verify} = require("jsonwebtoken");
const authConfig = require("../configs/auth");

function ensureAuth(require, response, next){
    const authHeader = request.headers.authorization;
    if(!authHeader){
        return response.status(401).json("Invalid JWT Token");
    }

    const [, token] = authHeader.split(" ");

    try{
        const { sub: user_id } = verify(token, authConfig.jwt.secret);

        request.user = {
            id: Number(user_id)
        };

        return next();
    }catch{
        return response.status(401).json("Invalid JWT Token");
    }
}

module.exports = ensureAuth;