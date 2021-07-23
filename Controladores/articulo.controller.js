import model from "../Modelos"
export default {
    agregar: async (req, res, next) => {
      try {
        const { nombre, precio, idpersona } = req.body;
  
        const articulos = new model.Articulo({
          nombre,
          precio,
          idpersona,
        });
  
        const registro = await articulos.save();
        res.status(200).json(registro);
        console.log(req.body);
      } catch (e) {
        res.status(500).send({
          message: "Ocurrio un error al guardar los datos",
        });
  
        next(e);
      }
    }
}
