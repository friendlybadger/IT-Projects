const db = require('../util/database')

module.exports = class Grocery {
    constructor(id, item){
        this.id = id;
        this.item = item;
    }
    // display all groceries
    static fetchAll(){
        return db.execute('SELECT * FROM groceries');
        
    }
    // insert into database
   static post(item){
    return db.execute('INSERT INTO groceries (item) VALUES (?)', [item]);
   }
//    update into databse
   static update(id, item){
    return db.execute('UPDATE groceries SET item=? WHERE id=? ', [ item,id]);
   }
//    delete from database
   static delete(id){
    return db.execute('DELETE from groceries WHERE id=? ', [ id]);
   }
};