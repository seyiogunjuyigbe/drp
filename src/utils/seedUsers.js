const { registerAdmin } = require("../controllers/userAuth");
module.exports = () => {
    registerAdmin("Seyi", "Mike", "seyiogunjuyigbe@gmail.com", "seyimike", "password");
    registerAdmin("Shannona", "Brown", "shannona@gmail.com", "pastorshannona", "shannona");
}

