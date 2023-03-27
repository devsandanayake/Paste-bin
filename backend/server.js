const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const  cors = require('cors');
const app = express();


const PORT = process.env.PORT || 8080;
//import routes
const postBin = require('./routes/postBin');
 
 
 



//app middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());



//routes middelware
app.use(postBin);




app.get("/",(req,res)=>{
    res.send("upload file")
})

 
const DB_URL='mongodb+srv://twg:pastebin@mernapp.1zdu8uy.mongodb.net/mernCrud?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=> console.log('DB connection error',err));


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
})





