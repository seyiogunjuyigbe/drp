const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const DB_URL = process.env.DB_URL
module.exports = () =>{
    mongoose.connect(DB_URL, {
        useNewUrlParser: true, 
        useFindAndModify: false, 
        useCreateIndex:true,
        useUnifiedTopology: true
        }, (err,done) => {
          if(err){
            console.error(err);
          } else{
            console.log('Database connected to: ' + DB_URL);
          }
      })
      
}