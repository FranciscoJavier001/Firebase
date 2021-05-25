# Este lo voy a dejar como referencia

//** Para hacer el orderBy, de igual manera podemos ponerlo como lo necesitemos y asi concatenamos las referencias */
// (Si no tiene un campo lo excluye---)
usuariosRef
            .orderBy('nombre')
            .orderBy('salario')
            .get().then( retornaDocumentos )