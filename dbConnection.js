// Get the client
import mysql from 'mysql2/promise';


let conector=null;



const connection=async()=>{


   try {
        // Crear conexión a la base de datos
        conector= await mysql.createConnection({
            host: 'localhost', // Cambiar según su configuración
            user: 'felipe',      // Usuario de la base de datos
            password: 'morron2020', // Contraseña de su base de datos
            database: 'dietas_tabla' // Nombre de su base de datos
        });

        
      return conector;
    } catch (err) {
        console.error('Error durante la Coneccion de la base de datos:', err.message);
    }




}



const Create_table_usuarios=async()=>{


const Query=`CREATE TABLE IF NOT EXISTS usuarios(

      id INT AUTO_INCREMENT PRIMARY KEY,
      user VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL);`;



try {

    const [result] = await conector.query(Query);
    return result;
  } catch (err) {
    console.error('Error creating table:',err);
    throw err;
  }




}




const Create_table_dietas=async()=>{

const query=`CREATE TABLE IF NOT EXISTS dietas(
  id INT AUTO_INCREMENT PRIMARY KEY,
  sala VARCHAR(255) NOT NULL,
  numero_cama INT NOT NULL,
  paciente VARCHAR(255) NOT NULL,
  indicacionAlimentaria VARCHAR(255) NOT NULL,
  observaciones VARCHAR(255) NOT NULL);`


try {

    const [result] = await conector.query(query);
    return result;
  } catch (err) {
    console.error('Error creating table:',err);
    throw err;
  }



}




    
    export {Create_table_usuarios,Create_table_dietas}
    export default connection;

