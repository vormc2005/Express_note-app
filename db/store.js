

// need to create object to store data
    var id = 1;

class store {
    

    constructor(title, text){
        this.id = id++
        this.title=title;
        this.text=text;
        
       
        }
    }
console.log(id)




module.exports= store;