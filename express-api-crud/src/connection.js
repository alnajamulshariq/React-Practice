const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/employeeDB';

mongoose.connect(dbURL).then(()=>{
    console.log('Connected to MongoDB successfully');
})