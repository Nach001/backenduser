const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const usersRouter=require('./app/routers/usersRouter')
app.use(express.json());

//ruta
app.use("/api", usersRouter);

//configuracion puerto
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto " + PORT);
})