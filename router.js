import { Router } from "express";
import { delete_data_pacientes, get_data_salas, Insert_Data_Into_Table } from "./dbConnection.js";


const router=new Router();



router.get('/home',(req,res)=>{

    res.render("index.pug");
})


router.get('/1-3',(req,res)=>{


    res.render("sala_1-3.pug");
});


router.get('/1-3/sal',async(req,res)=>{

const resu= await get_data_salas(req.query.sala);


console.log("Este es el fucking result",resu);
      
res.json({resultado:resu});
});


router.post('/1-3',async (req,res)=>{



const resu=req.body;

//(sala,numero_cama,paciente,indicacionAlimentaria,observaciones
 const insertado=await Insert_Data_Into_Table(resu.nombre_sala,parseInt(resu.num_cama),resu.name+' '+resu.surname,resu.Dieta,resu.Colacion,resu.Observations);




res.redirect('/1-3');

});



router.get('/2-4',(req,res)=>{


    res.render("sala_2-4.pug");
});


router.get('/6-neo2',(req,res)=>{

    res.render("sala_6-neo2.pug");

});

router.get('/5-G.P',(req,res)=>{


    res.render("sala_5.pug");
});

router.get('/G.A',(req,res)=>{

    res.render("sala_guarAdul.pug");

});

router.get('/8-S.M',(req,res)=>{


    res.render("sala_8.pug");
});





router.post("/1-3/delete",async(req,res)=>{

 const id=req.body.id;
 console.log("Este es el id",id);
 const resu =await delete_data_pacientes(id);



 res.json({success:true});




});


export default router;