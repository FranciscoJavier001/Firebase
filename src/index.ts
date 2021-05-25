import db from './firebase/config' //** db hace referencia a la importacion por defecto que tengo en el export del config.ts */
import { retornaDocumentos } from './helpers/mostrar-documentos' //** Asi importo */
// import { firestore } from 'firebase'

//** Para ordenar usamos la referencia que tenemos en el crud.md */
const usuariosRef = db.collection('usuarios')//** Esta va a ser la referencia a la coleccion de la base de datos en la cual voy a estar trabajando */

//** Para hacer el orderBy, de igual manera podemos ponerlo como lo necesitemos y asi concatenamos las referencias */
// (Si no tiene un campo lo excluye---)
usuariosRef
            .orderBy('nombre')
            .orderBy('salario')
            .get().then( retornaDocumentos )