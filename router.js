import { Router } from "express";


const router=new Router();



router.get('/home',(req,res)=>{

    res.render("index.pug");
})


export default router;