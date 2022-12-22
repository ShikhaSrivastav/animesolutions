var express=require("express");
//const {modelNames}= require("mongoose");
var mongoose =require("mongoose");
var schema = mongoose.Schema;
var router=express.Router();

//designing model using mongoose schema
var animeschema = new schema({
    aid:String,
    name:String,
    year:String,
    rating:String

});

//reterive data from animetab collection and its schema is defined using animeschema
//model(name,schema object,collection name)
//collection name is optional if model name and collection name is same

var Anime = mongoose.model('animetab',animeschema,'animetab');

router.get("/anime",function(req,resp){
    Anime.find().exec(function(err,data){
        if(err){
            resp.status(500).send("no data found")
        }
        else{
            resp.send(data);
        }
    })
});

router.get("/anime/:aid",function(req,resp){
    console.log("aid:" + req.params.aid);
    Anime.findOne().exec(function(err,data){
        if(err){
            resp.status(500).send("no data found")
        }
        else{
            resp.send(data);
        }
    })
});

router.post("/anime",function(req,resp){
 var animeob = new Anime({aid:req.body.aid,name:req.body.name,year:req.body.year,rating:req.body.rating})
   animeob.save(function(err,data){
    if(err){
        resp.status(500).send("data not added");
    }
    else{
        resp.send(data);

    }
   })
});

router.put("/anime/:aid",function(req,resp){
    console.log(req.body);
    Anime.findOne({aid:req.body.aid},function(err,doc){
        if(err){
            resp.status(500).send("no data updated");
        }
        else{
            console.log("updating data.....");
            doc.aid=req.body.aid
            doc.name=req.body.name
            doc.year=req.body.year
            doc.rating=req.body.rating
            doc.save(function(err,data){
                if(err){
                    resp.status(500).send("data not added");
                }
                else{
                    resp.send("data has been updated");
                    resp.send(data);
                }
            })
        }
    })
});

router.delete("/anime/:aid",function(req,resp){
   Anime.remove({aid:req.params.aid},function(err,doc){
    if(err){
        resp.status(500).send("data can not be deleted");
    }
    else{
        resp.status(200).send("data has been deleted successfully");
    }
   })
});

module.exports=router;