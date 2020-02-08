
/**Need to try to get id incremented and not changed, maybe create array of ids, and push it if not in the array */


// need to create object to store data
 


class store {
    

    constructor(title, text){
       
    

        this.id = Math.floor(Math.random()*(100-1)+1)

        this.title=title;
        this.text=text;
        
       
        }

    }





module.exports= store;