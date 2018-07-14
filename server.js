var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./routing/htmlRoutes');
var apiRoutes = require('./routing/apiRoutes');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.listen(process.env.PORT||3000,()=>{
    console.log("you are connected to port 3000");
})

htmlRoutes.htmlPageRequests(app,path);

apiRoutes.getApiRoutes(app,path);
