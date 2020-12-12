const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    date_create:{
        type: Date,
    },
    date_update:{
        type: Date,
    },
    date_delete:{
        type: Date,
    }
});

let person = module.exports  = mongoose.model('person', PersonSchema);

module.exports.get = (callback,limit) => {
    person.find(callback).limit(limit);
}
