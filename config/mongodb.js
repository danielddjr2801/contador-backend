import mongoose from "mongoose";

mongoose.connect("mongodb+srv://danielddjr2801:MXGpyJW7nVEzYSuH@instancia1.8ahxuz5.mongodb.net/ProyectoPersonal?retryWrites=true&w=majority&appName=Instancia1")
.then(()=> console.log("Conexion exitosa!"))
.catch((e)=> console.log(e))