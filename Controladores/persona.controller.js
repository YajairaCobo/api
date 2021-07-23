import model from "../Modelos";

export default{
    agregar: async(req, res, next) =>{
        try{
            const {nombre, apellidos, direccion}=req.body; 

            const personas= new model.Persona({
                nombre,
                apellidos,
                direccion
            });

            const resgistro = await personas.save();
            res.status(200).json(registro);
            console.log(req.body);
        }catch(e){
            res.status(500).send({
                message: "ocurrio un error al agregar los datos"
            });
            next();
        }
    }

}