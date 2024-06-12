import app from './server.js'

app.listen(app.get("port"),()=>console.log('listening on port 3000'))

//npm i json-server //Para instalar los paquetes del servidor de la base de datos
//json-server --watch db.json --port=4000 //Comando para levantar el servidor, se lo incluye en el package.json en forma de script
//Comandos para ejecutar los scripts //npm run dev y //npm run bdd
//! Metodo del Modelo
//? 1. Mandar la información a la BDD
//? 2. Obtener la respuesta de la BDD para enviar al controlador
//! Metodo del Controlador
//? 1. Obtener la información del Modelo(Invocar el método del modelo)
//? 2. Trabaja con Rutas (Tomar el request de la ruta)
//? 3. Enviar la información en formato JSON al Frontend (Mandar respuesta al frontend)
//! Ruta
//? 1. Definir el path
//? 2. Invocar el método del Controlador
//el componente de la ruta se registra para todo el web server

/*
06/Junio/2024
Funcionalidades de una aplicación web
*Create -
*Read    |  Funcionalidades
*Update  |  Generales
*Delete -
*Register
*Login
*File-upload
*Mail
*Authentication
*Authorization
*/
//Implemetacion de JWT en express
//npm i jsonwebtoken
//en la carpeta middlewares se crea el archivo auth.js y se importa la libreria de jsonwebtoken

//La creacion del token se lo implementa en el controlador 
//La verificación del otken se lo implementa en las rutas 

//npm i cloudinary dotenv express-fileupload
//se importan las librerias cloudinary, dotenv, fileupload en el archivo server.js

//10/junio/2024
//npm i fs-extra 