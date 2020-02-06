const express =require("express");
const fs = require("fs");
const store = require("../db/store");
// array that gets displayed on the left
const db =require("../db/db.json")

module.exports = function (app){
// Reads stored files and retuns them
    app.get("/api/notes", function(req,res){
        res.json(db);
    });


    //Posting a new note  
    app.post("/api/notes", function(req,res){

        let storedItem =db;
        let moreNotes = new store(req.body.title, req.body.text);
        storedItem.push(moreNotes);
        console.log(moreNotes)

        fs.writeFile("./db/db.json", JSON.stringify(storedItem), function(err){
            if (err) throw err;
            console.log('Data written')
        })
    })

    app.delete("/api/notes/:id", function(req, res){
        


    });
}




