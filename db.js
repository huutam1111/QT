const fs = require('fs');
const unorm = require('unorm');


exports.addItem = (item, connect)=>{
    
        try{
          fs.readFile('./db.json', 'utf8', (err, data) => {
            let check = false
            if (err) throw err;
            let databases = JSON.parse(data);
            databases.map((tmp, index)=>{
                if(item.title === tmp.title){
                    tmp['image'] = [...tmp['image'], ...item.image]
                    fs.writeFileSync('./db.json',  JSON.stringify(databases), 'utf8');
                    check = true
                    
                }
            })
            if(!check){
              ghiFile(item)
    
            }
          });
        }catch(error) {
          console.log(error);
        }
       

        
     
}
const removeAccents =(str) => {
    return  unorm.nfd(str).replace(/[\u0300-\u036f]/g, '');
  }
const ghiFile = (data) => {
    var databases = require('./db.json');
    console.log("-----",[...databases, data]);

    databases = JSON.stringify([...databases, data])
    fs.writeFile('./db.json', databases, 'utf8', (err) => {
      if (err) {
        console.log(`Error writing file: ${err}`);
      } else {
        console.log(`File is written successfully!`);
      }
  
    });
  }

