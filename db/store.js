var id=0;
/**Need to try to get id incremented and not changed, maybe create array of ids, and push it if not in the array */
class store {
    

    constructor(title, text){
        this.id = id++;
        this.title=title;
        this.text=text;
        
       
        }

    }





module.exports= store;