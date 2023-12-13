const {default : mongoose} = require("mongoose");


const AdminSchema = mongoose.Schema({
      userFirstName :{
           type: String
      },
      userSecondName:{
        type: String
      },
      userEmail:{
        type : String
      },
      userRole:{
        type:String
      },
      userPassword:{
        type:String
      },
      userId:{
        type :String
      },
      userLocation:{
        type:String
      }
});


module.exports = mongoose.model("Users",AdminSchema);