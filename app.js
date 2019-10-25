const express =require ('express') ;
const sql = require ('mssql') ;
var url = require('url');
const app= express() ;



app.use ('/', function(req, res )
{
//res.send ('Hello Test' ) ;
   res.header("Access-Control-Allow-Origin", "*");
    // config for your database
var config = {
        user: 'testadm',
        password: 'test',
        server: 'testserver', 
        database: 'testdb' 
    };
	
var q = url.parse(req.url, true).query;
res.send (q.name ) ;
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query("select * from testtbl" , function (err, recordset) {
            
            if (err) console.log(err)
console.log(recordset);
            // send records as a response
            res.send(recordset);
            sql.close()
        });
    });




}) ;

const port = process.env.PORT || 5200 ;

app.listen(port , function(){
console.log('Server is listening...') ; 
}) ;