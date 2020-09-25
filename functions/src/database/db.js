const mongoose = require('mongoose');
const { DB_URL } = require("../../env.json")
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
      console.log('Database connected to: ' + DB_URL);
    }
  })

}