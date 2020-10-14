const mongoose = require('mongoose');
const { DB_URL } = require("../config/constants")
mongoose.Promise = global.Promise;
module.exports = () => {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  }, (err, done) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Database connected at ' + new Date().toTimeString());
    }
  })

}