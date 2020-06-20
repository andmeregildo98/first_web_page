const express = require("express");
const router = express.Router();

//// main route
router.get('/',(req,res)=>{
    //res.render("index.html",{title:"first-website-main-page"});
    res.render("index.html",{title:"EL PERSONAJE DE STAR WARS"});
});

//// nosotros route
router.get('/nosotros',(req,res)=>{
    //ejemplo con path y __dirname
    //res.render(path.join(__dirname,"/view/nosotros.ejs"),{title:"first-website-encuesta"});
    res.render("nosotros.html",{title:"first-website-about-us"});
});

//// contacto route
router.get('/contacto',(req,res)=>{
    //ejemplo con path y __dirname
    //res.render(path.join(__dirname,"/view/contacto.ejs"),{title:"first-website-contacto"});
    res.render("contacto.html",{title:"first-website-contact"});
});

//// encuesta route
router.get('/quiz',(req,res)=>{
    //ejemplo con path y __dirname
    //res.render(path.join(__dirname,"/view/quiz.ejs"),{title:"first-website-encuesta"});
    res.render("quiz.html",{title:"first-website-quiz"});
});

//exportar rutas desde router

module.exports = router;