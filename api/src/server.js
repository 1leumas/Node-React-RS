require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");

const AppError = require("./utils/AppError");

const express = require("express");

const routes = require("./routes");
migrationsRun();

const app = express();

app.use(express.json());

app.use(routes);



app.use((error, request, response, next) => {
    if (typeof error === "string") {
        return response.status(401).json(error);
    }

    console.error(error);

    return response.status(500).json("Internal server error");
});

const port = 3333;
app.listen(port, () => console.log(`server is running at port ${port}`));