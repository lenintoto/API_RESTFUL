import jwt from "jsonwebtoken";

const createToken=(userinfo)=>{
    //:                 1           2           3
    return jwt.sign(userinfo,'secret_key',{expiresIn:'1h'})
}

const verifyToken = (req,res,next)=>{
    //req.body req.params req.query req.headers
    const authHeader = req.headers.authorization

    //Validar si se envia el token
    if (!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({message:'Token no proporcionado'})
    }
    //Dividir el token "Bearer184165144161964"
    //token=['Bearer', ' 184165144161964']
    const token=authHeader.split(' ')[1]
    //Verificar si el token es valido
    jwt.verify(token,'secret_key', (err,decoded)=>{
        //Verificación
        if (err) {
            return res.status(403).json({message:'Fallo al autenticar el token'})
        }
        //Usuario decodificado
        req.user = decoded
        next()
    })
}

export {createToken,verifyToken}