import express from 'express'


const server=express();
import router from './router.js';
import connection,{Create_table_dietas, Create_table_usuarios} from './dbConnection.js';

const PORT=process.env.PORT;


server.set('views','./public');
server.set('view engine','pug');
server.use(express.static('./public'));
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use('/',router);


server.listen(PORT,async()=>{


console.log(`Server running on PORT ${PORT}`);
await connection();
const result=await Create_table_usuarios();
const result2=await Create_table_dietas();
 console.log("Este es el result",result);
 console.log("Este es el result2",result2);

}

);



