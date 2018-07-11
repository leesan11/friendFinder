var friends = require("../data/friends");
var data;

function getApiRoutes(app,path){
    
    app.post('/api/friends',(req,res)=>{
        data = req.body
        friends.saveData(data);
        res.sendStatus(200);
        
    });
    app.get('/api/friends',(req,res)=>{
        res.json(friends.friends)
});
}




module.exports={
    getApiRoutes: getApiRoutes,
    getData:data 
}