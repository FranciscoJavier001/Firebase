import db from './firebase/config' //** db hace referencia a la importacion por defecto que tengo en el export del config.ts */
import { retornaDocumentos } from './helpers/mostrar-documentos' //** Asi importo */

const usuario = { //** Voy a crear un objeto llamado usuaruo y los de adentro van a ser los parametros */
    nombre: 'Pedro',
    activo: true,
    fechaNaci: 0 //** Solo puedo insertar objetos literales de JS */
}

const usuariosRef = db.collection('usuarios')//** Esta va a ser la referencia a la coleccion de la base de datos en la cual voy a estar trabajando */

//** Para grabarlo en la base de datos asi es */
// db.collection('usuarios') //** Para insertar es collection, el nombre de la colexion puede ser un path y asi ya tengo la referencia para hacer un .add() y ahtrgarlo */
//     .add( usuario ) //** Y aqui mando el usuario que quiero agregar */
//     .then( docRef => { // Como esto me regresa una promesa, puedo poner el .them y aqui voy a poner una referencia al documento y hago una funcion de flecha, y hago un log para poderlo ver
//         console.log( docRef.delete() ); //** Tabien aqui puedo mandar llamar funciones como el delete */
//     })
//     .catch( e => console.log('error', e) ) // Y si sucede algun error voy a poner un catch 

//** Para hacer una actualizacion en firestone */
 //** Siempore voy a ocupar la referencia a la cual voy a trabajar y esta se llama usuarios, entonces hay que hacer la referencia al id del documento y utilizamos el metodo update y cambiamos el parametro que querramos, son promesas en las cuales podemos utilizar un .them o un .catch para agarrar el error */
// usuariosRef.doc('CojUM48cANQ2qwJoQc6q')
//     .update({
//         activo: true
//     })

//** upate usuarios set activo = false where (esta es destructiva, porque borro todas las propiedades del objeto y solo dejo el activo como lo puse), pero podemos poner cosas nuevas, en el objeto, de igual manera es para actualizar la ultima instancia de lo que se ha actualizado */
// usuariosRef.doc('CojUM48cANQ2qwJoQc6q')
//     .set({
//         activo: false,
//         edad: 33,
//         casado: true,
//         id: 123
//     })

// Delete From Usuarios Where id = "xxx"
// usuariosRef
//     .doc("1AajRuGHD80PXPpXFAgN")
//     .delete()
//     .then( () => console.log('Borrado') ) //** Esto es una promesa, por eso ocupo el .then, puedo poner dentro una respuesta, aunque creo que no manda nada y mostramos en consola la respuesta */
//     .catch ( e => console.log('error', e )) //** En caso que nos mande un error, para atraparlo, y que nos muestre en consola el error */

// Select * From Usuarios
// usuariosRef
//     .onSnapshot( retornaDocumentos ) //** Importe la funcion de retornaDocumentos y asi me manda como argumentos los parametros que le pedi */

//** Con el get no creo un observable que este al pendiente de los cambios */
// usuariosRef
    // .get().then( retornaDocumentos ) //** Esta es una promesa que no va a estar al pendiente de los cambios porque es un get */
//** Es un argumento, una funcion, esa manda el primer argumento de la promesa  */

 //** Select * from usuarios Where activo = true, esto es un metodo que recibe 3 argumento, aqui busco el activo en true */
// usuariosRef.where('activo',"==",true).get().then( retornaDocumentos )

//** Select * from usuarios Where salario > 1800 */
// usuariosRef.where('salario','>',1800).get().then(retornaDocumentos)

//** Select * from usuarios Where salario > 1800 and salario < 2300 */
// usuariosRef.where('salario','>',1800)
//             .where('salario','<',2300)
//         .get().then( retornaDocumentos )

//** Select * from usuarios Where salario > 1800 And activo == true */
usuariosRef.where('salario','>',1800)
            .where('activo','==',true)
        .get().then( retornaDocumentos )