import routerx from 'express-promise-router';

import PersonaController from '../Controladores/persona.controller';

const router=routerx();

router.post('/crearPersona', PersonaController.agregar); 

export default router; 
