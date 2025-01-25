import express from 'express'


const server=express();
import router from './router.js';

const PORT=process.env.PORT;


server.set('views','./public');
server.set('view engine','pug');
server.use(express.static('./public'));
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use('/',router);


server.listen(PORT,()=>{


console.log(`Server running on PORT ${PORT}`);

}

);



