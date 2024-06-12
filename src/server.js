//importar modulos
import express from 'express'
import routerTour from './routers/tourRoutes.js'
import routerUser from './routers/userRoutes.js'

import cloudinary from 'cloudinary'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
//Inicializaciones
dotenv.config()
const app = express()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}))

//Variables
app.set('port', process.env.port || 3000)

//Middleware
app.use(express.json())

//Rutas
app.get('/',(req,res)=>{res.send("Server on")})

app.use('/api/v1',routerTour)
app.use('/api/v1',routerUser)


//Exportar la variable
export default app
