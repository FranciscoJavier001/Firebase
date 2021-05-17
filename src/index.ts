import db from './firebase/config' //** db hace referencia a la importacion por defecto que tengo en el export del config.ts */

const usuario = { //** Voy a crear un objeto llamado usuaruo y los de adentro van a ser los parametros */
    nombre: 'Pedro',
    activo: true,
    fechaNaci: 0 //** Solo puedo insertar objetos literales de JS */
}

//** Para grabarlo en la base de datos asi es */
// db.collection('usuarios') //** Para insertar es collection, el nombre de la colexion puede ser un path y asi ya tengo la referencia para hacer un .add() y ahtrgarlo */
//     .add( usuario ) //** Y aqui mando el usuario que quiero agregar */
//     .then( docRef => { // Como esto me regresa una promesa, puedo poner el .them y aqui voy a poner una referencia al documento y hago una funcion de flecha, y hago un log para poderlo ver
//         console.log( docRef.delete() ); //** Tabien aqui puedo mandar llamar funciones como el delete */
//     })
//     .catch( e => console.log('error', e) ) // Y si sucede algun error voy a poner un catch 