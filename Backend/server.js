// server.js
const http = require("http");

num_visits = 0;
const express = require("express");
const app = express();
const mongoose = require('mongoose');

main();
async function main() {
   
   mongoose.connect('mongodb://localhost/newdb');
   app.use(express.json());
   
   const chickenSchema = new mongoose.Schema({
      name: {type: String, required: true },
      age: {type: Number, required: true },
      color: {type: String, required: true }
   });
   const Chicken = mongoose.model("Chicken", chickenSchema);
   chickens =  {
      1: {"name":"Craig"},
      2: {"name":"Johhny"},
      3: {"name":"Chiquita"}
   };
   next_id = 4;
   
   app.post("/api/chicken", async function(req, res){
   chicken = await Chicken.create(req.body);
      res.send({  "msg":"Chicken created successfully", "id": chicken["_id"], "chicken": chicken });
   });
   
   app.put("/api/chicken/:id", async function(req, res){
      newChicken = req.body;
      id = req.params.id;
      chicken = await Chicken.findById(id);
      if(chicken){ // chicken exists

         await Chicken.updateOne({_id: id}, {$set: newChicken});
          chicken = await Chicken.findById(id);
         res.send({"id": chicken["_id"], "chicken": chicken});
      }else{
         res.status(404).send({"error": 404, "msg":"Are you dumb? This chicken does not exist."});
      }
   });



   app.get("/api/chickens/:filter",async function(req, res){
      const filter = JSON.parse(req.params.filter);
      console.log(filter);
      chickens;
      chickens = await Chicken.find(filter);
      res.send(chickens);
   });

   app.get("/api/chickens",async function(req, res){
      chickens = await Chicken.find();
      res.send(chickens);
   });

   
   app.delete("/api/chicken/:id", function(req, res){
      id = req.params.id;
      if(chickens[id]){
         delete chickens[id];
         res.send({"msg": `id=${id} is now nuggets. Can your pet referance`});
      }else
         {
         res.status(404).send({"error": 404, "msg":"invisble nuggets"});
      }
   });  
   
   
   app.get("/", function(req, res){
      res.send("<h1>Hello, Guysh</h1>");
   });
   
   
   app.get("/api/chicken/:id", async function(req, res){
      id = req.params.id;
      try{chicken = await Chicken.findById(id);
         if(chicken){
            console.log(chicken);
            res.send(chicken);
            
         }}catch(error){
            console.log(error);
            console.log("lmfao");
            res.status(404).send({"error": 404, "msg":"Are you dumb? This chicken does not exist."});      }
         }); 
         
         app.get("/chicken/:id", function(req, res){
            index = req.params.id;
            if (index > theFat.length -1){
               res.send({"error": 404, "msg":"There is only one fat, do not try to find others. or else"});
               
            }else{
               res.status(404).send({"error": 404, "msg":"There is only one fat, do not try to find others. or else"});
            }
            
            res.send(theFat[index]);
         });
         
         
         app.listen(3000, function(){
            console.log("idk im listening");
         });
      }
      
      app.delete("/api/chicken/:id", async function(req, res){
         id = req.params.id;
         chicken = await Chicken.findById(id);
         if(chicken){
            try{
            await Chicken.deleteOne({_id: id});
            res.send({"message":`eated chicken of id=${id}`, "response_code":200});
         }catch(err){
            console.error(err);
            res.status(500).send(err);
         }
         }else{
            res.status(404).send({"error": 404, "msg":"Are you dumb? This chicken does not exist."});
         }
      });
      
      /** TOOLS                              
      * `<p></p>`
      */
      
      
      
      /** 
      http.createServer(function(request, response) {  
      
      console.log(request.method);
      console.log(request.url);
      ip = request.socket.remoteAddress;
      if(request.url === '/chicken') {
      num_visits += 1;
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(`<h1>Bawk${" Bawk".repeat(num_visits)}! <(')3</h1>`);    
      response.end();
      } else if(request.url=== '/'){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(`<h1>Hello, Your address is ${ip.substring(ip.lastIndexOf(':') + 1)}</h1>'`);    
      response.end();
      
      }else {
         response.writeHead(400, {"content-type": "text/html"});
      response.write("<h1>URL no exist bruh</h1>");
      response.end();
      }  
      
      }).listen(3000);
      
      **/