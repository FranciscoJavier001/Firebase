//** En palabras simples, que hace esta funcion, muestra un snapshot y muestra en consola los dicumentos y a su vez tambien los retorna */

//** Esto va a ser una funcion */
//** Voy a importar firebase, pero solo para tener el tipado */
import firebase from 'firebase'

export const retornaDocumentos = ( snapshot:firebase.firestore.QuerySnapshot ) => { //** Va a recibir un snapShop, y con los dos puntos declaro el tipo de archivo ya que me lo pide */

    //** Voy a crear un arreglo que se llame usuarios y lo voy a inicializar vacio */
    const documentos: any[] = [] //** Que sea un arreglo del tipo Any */

    snapshot.forEach( snapHijo => { //** Me permite barrer cada elemento que tenga el arreglo */    
        documentos.push({ //** Voy a crearme un nuevo objeto y le voy a colocar una propiedad llamada ID que sea igual al snapHijo.id */
            id: snapHijo.id,
            ...snapHijo.data() //** Pero me falta la data, y voy a usar el operador spred... y porner el snapHijo.data() */
        })
    })

    console.log( documentos ); //** Esto es un arreglo de JS, y aqui lo mntengo para ver siempre el resultado */
    return documentos //** Por si quiero trabajar con el resultado */
}