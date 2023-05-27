const express = require('express');

const app = express();

app.get("/message/:id/:user", (request, response) => {
    const {id, user} = request.params;
    response.send(`message id: ${id} to user: ${user}`);
})

const port = 3333;
app.listen(port, () => console.log(`server is running at port ${port}`));