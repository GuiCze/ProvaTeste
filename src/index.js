import express from "express";
import veicle from "./routers/veicle-routes.js"; 
import maintence from "./routers/maintence-routes.js";
import workshop from "./routers/workshop-routes.js";


const app = express();

app.use(express.json());-
app.use("/veicle", veicle)
app.use("/maintence", maintence)
app.use("/workshop", workshop)



app.listen(3000, ()=>{
    console.log(`Rodando na porta 3000`)
})
