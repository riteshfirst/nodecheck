const express =require ('express') ;

const app= express() ;

app.use ('/', function(req, res )
{
res.send ('Hello Test' ) ;

}) ;

const port = process.env.PORT || 5200 ;

app.listen(port , function(){
console.log('Server is listening...') ; 
}) ;