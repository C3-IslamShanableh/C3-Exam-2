// db
const mongoose = require ("mongoose");

const option = {
    
}



mongoose.connect(('mongodb://localhost:27017/Exam2') ,()=>{
   console.log("db connected ");
})