const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.gamedatabase);

module.exports={
    connection
}
