const express = require("express");
const fs = require("fs");
const store = require("../db/store");
// array that gets displayed on the left
const db = require("../db/db.json")




/**Need to export modules, otherwise app is undefined */

module.exports = function (app) {
/**Code for reading db.json file here */
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

//Posting a new note to  the object
    app.post("/api/notes", function (req, res) {

        
        let moreNotes = new store(req.body.title, req.body.text);
        db.push(moreNotes);
        console.log(moreNotes)

        fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
            if (err) throw err;
            console.log('Data written')
        })
    })

    app.delete("/api/notes/:id", function (req, res) {

        /**Assigning paramater to get ID */

        let noteID = parseInt(req.params.id);
        console.log(noteID);

        /**Searching thorugh array to and matchind id#, so we can delete object if matches
         * 
         * or filtering through */

        let deletedObj = db.filter(notes => {
            return notes.id != noteID;

        });
        console.log(deletedObj)
        /**Workiing code for writing */

        fs.writeFile("./db/db.json", JSON.stringify(deletedObj), function (err) {
            if (err) throw err;
            console.log('Data written')
        })

        res.json(deletedObj)

    })







}
/**Trying to loop through and delete notes, not working code */



// removeNotes =(notes1)=>{
// for (i = 0; i < db.length; i++) {

//     // console.log(storedItem[i]);
//     console.log( notes1.id != noteID)


//     if(parsed =noteID){
//         console.log(i + "success")
//     }else{console.log("smth wrong")}

// }
//    /**Workiing code for writing */
//     // fs.writeFile("./db/db.json", JSON.stringify(storedItem), function (err) {
//     //     if (err) throw err;
//     //     console.log('Data written')
//     // })
// }

