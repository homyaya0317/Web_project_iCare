const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const Users = require("./routes/users")
require("dotenv/config")


const cors = require("cors")
const path = require("path")

const app = express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    next();
  });

  

// middlewares
app.use("/User", Users)
// app.use("/admin",adminRoute)



app.use(cors(
  {
    origin:"*"
  }
));

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const PORT = process.env.PORT || 8000;

// Connect to db
mongoose.connect(
    process.env.DB,
    () =>{
        console.log("connected to Database")
    }
)

/* Listening to the port 8000. */
app.listen(PORT, () => { 
    console.log(`app listening at http://localhost:${PORT}`,)  
})
















