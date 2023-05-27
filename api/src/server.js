const express = require('express');

const app = express();

app.post("/users", (request, response) => {

    response.send(`Voce chamou o post`);
})

const port = 3333;
app.listen(port, () => console.log(`server is running at port ${port}`));