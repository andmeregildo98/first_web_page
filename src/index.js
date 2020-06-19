const path = require("path");
const express = require("express");
const app = express();

//setting
app.set('port',8080);
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname,'views'));


//middlewares

//routes
app.use(require("./routes/index"));

//static files
app.use(express.static(path.join(__dirname,'public')));
console.log(path.join(__dirname,'public'));

// escuchando el server
app.listen(app.get('port'),()=> {
    console.log("server on port "+ app.get('port'));    
    console.log(__dirname);
    console.log(path.join(__dirname,"/views/index"));
});

