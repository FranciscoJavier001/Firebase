import db from './firebase/config' //** db hace referencia a la importacion por defecto que tengo en el export del config.ts */
import { retornaDocumentos } from './helpers/mostrar-documentos' //** Asi importo */

//** Para ordenar usamos la referencia que tenemos en el crud.md */
const usuariosRef = db.collection('usuarios')//** Esta va a ser la referencia a la coleccion de la base de datos en la cual voy a estar trabajando */

// Wow, asi creo elementos en la pagina de html
const btnNext = document.createElement('button')
btnNext.innerText = 'Next Page'
document.body.append( btnNext )

let firstDocument: any = null //** Asi declaramos el tipo de variable para que ts no la haga de pedo */
let lastDocument: any = null //** Asi declaramos el tipo de variable para que ts no la haga de pedo */
//** Esta funcion significa o en lectura, btn, ponte al tiro porque te van a dar click, pero no vas a recibir ningun parametro, pero desmpues nos vas a mostrar en la consola el mensaje de click
btnNext.addEventListener('click', () => {
    
    const query = usuariosRef
                .orderBy('nombre')
                .startAfter( lastDocument )

    query.limit(2).get().then( snap => {

        firstDocument = snap.docs[ 0 ] || null
        lastDocument = snap.docs[ snap.docs.length - 1 ] || null
        retornaDocumentos( snap )
    })
})

// Wow, asi creo elementos en la pagina de html
const btnPrev = document.createElement('button')
btnPrev.innerText = 'Previous Page'
document.body.append( btnPrev )

//** Esta funcion significa o en lectura, btn, ponte al tiro porque te van a dar click, pero no vas a recibir ningun parametro, pero desmpues nos vas a mostrar en la consola el mensaje de click
btnPrev.addEventListener('click', () => {
    
    const query = usuariosRef
                .orderBy('nombre')
                .endBefore( firstDocument )

    query.limit(2).get().then( snap => {

        firstDocument = snap.docs[ snap.docs.length - 1 ] || null
        lastDocument = snap.docs[ snap.docs.length - 1 ] || null
        retornaDocumentos( snap )
    })
})