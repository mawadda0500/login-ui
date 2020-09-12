/*jshint esversion: 6 */
const express= require('express');



//  //create app
 const app=express();
 



 
app.listen(process.env.PORT || 3000);


//register view engine
app.set('view engine', 'ejs');





//static files
app.use(express.static('public'));

app.get('/', (reg,res)=>{
  res.render('index');
});