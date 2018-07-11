
module.exports = {

    htmlPageRequests: function(app,path){
        app.get('/survey',(req,res)=>{
            res.sendFile(path.resolve("./public/survey.html"));
    
        });
    
        app.get('/',(req,res)=>{
            res.sendFile(path.resolve('./public/home.html'));
    
        });

    }

}