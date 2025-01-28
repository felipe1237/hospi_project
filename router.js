import { Router } from "express";
import { Insert_Data_Into_Table } from "./dbConnection.js";


const router=new Router();



router.get('/home',(req,res)=>{

    res.render("index.pug");
})


router.get('/1-3',(req,res)=>{


    res.render("sala_1-3.pug");
});


router.post('/1-3',(req,res)=>{


console.log("Este es el body",req.body);
const resu=req.body;
// Insert_Data_Into_Table(resu.name,);

res.send("Validacion exitosa");

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


export default router;