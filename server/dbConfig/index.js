const mongoose = require('mongoose');

const DB_Config =()=>{
    mongoose.connect('mongodb+srv://short_url_maker:short_url_maker@cluster0.7ooynjm.mongodb.net/short_url_maker?appName=Cluster0')
  .then(() => console.log('DB Connected!'));
}

module.exports=DB_Config