var databaseHandler = {
db: null,
createDatabase: function(){
    this.db = window.openDatabase(
        "products.db",
        "1.0",
        "product database",
        1000000);
    this.db.transaction(
        function(tx){
            //Run sql here using tx
            tx.executeSql(
                "create table if not exists product(_id integer primary key, name text, quantity integer)",
                [],
                function(tx, results){},
                function(tx, error){
                    console.log("Error while creating the table: " + error.message);
                }
            );
            
            tx.executeSql("create table if not exists userDb(_id integer primary key, username text unique, userpass, role integer)", [], 
                         function(tx,results){},
                          function(tx,error){
                                    console.log("Error when create table userDb" + error.message);
            }
                         )
      
            
        },
        function(error){
            console.log("Transaction error: " + error.message);
        },
        function(){
            console.log("Create DB transaction completed successfully");
        }
    );

}
}