
const { MongoClient } = require('mongodb');
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let conn
client.connect(err => {
  conn = client.db("recipes");
    console.log("Connection Made!")




    
const fs = require('fs');


getDocuments(conn, function(docs) {
    
        console.log('Closing connection.');
        client.close();
        
        // Write to file
        try {
            fs.writeFileSync('out_file.json', JSON.stringify(docs));
            console.log('Done writing to file.');
        }
        catch(err) {
            console.log('Error writing to file', err)
        }
    });
    

  
});

const getDocuments = function(db, callback) {
    const query = { };  // this is your query criteria
    db.collection("recipe")
      .find(query)
      .toArray(function(err, result) { 
          if (err) throw err; 
          callback(result); 
    }); 
};