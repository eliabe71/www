const express  =   require("express");
const app = express();
app.get("/",(request,response) =>{return response.json({
    evento : "Semana Oministeck ",
    aluno : "Eliabe"
    });
});
app.listen(3333); 