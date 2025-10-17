const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name: String,
    position: String,
    department: String,
    salary: Number
});
const Employee = mongoose.model('Employee', empSchema);

module.exports = Employee;