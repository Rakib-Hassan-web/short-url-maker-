const mongoose = require('mongoose');
require('dotenv').config()

const DB_Config =()=>{
    mongoose.connect(process.env.DB_URL)
  .then(() => console.log('DB Connected!'));
}

module.exports=DB_Config