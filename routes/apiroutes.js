const express =require("express");
const fs = require("fs");
const store = require("../db/store");
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
        
    })
}




