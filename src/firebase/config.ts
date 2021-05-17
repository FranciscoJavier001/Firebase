//** Para quitar el error del firebase debo de importar esto, despues pase esto a index.ts y puse un log para confirmar la conexion */
import firebase from 'firebase/app'
import 'firebase/firestore' //** Esto me va a habilitar todas las funcionalidades de firestore */

const firebaseConfig = { //** Esta es la cadena de conexion */
    apiKey: "AIzaSyBuKkM3Zr-Sca2XWUc1GR0ZSnWJsyx98dg",
    authDomain: "sql-demos-ee8c4.firebaseapp.com",
    projectId: "sql-demos-ee8c4",
    storageBucket: "sql-demos-ee8c4.appspot.com",
    messagingSenderId: "477548804525",
    appId: "1:477548804525:web:584dba230b4625f29c0924",
    measurementId: "G-RPSDLW34KF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //** Voy a hacer una pequeña exportacion, por cuando quiera traer datos, o hacer un crud  */
  //** Como si tuviera una exportacion de la base de datos */
    export default firebase.firestore()