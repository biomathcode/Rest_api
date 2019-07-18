const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation Schema 
const GeoSchema = new Schema({
    type:{
        type: String,
        default: "Point"
    },
    coordinates:{
        type: [Number],
        index:"2dsphere"
    }
})
//create pratik Schema and model
const PratikSchema =  new Schema({
    name:{
        type: String,
        required:[true,"name field is required"]
    },
    rank: {
        type: String
    },
    available:{
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
    
});

const Pratik = mongoose.model('pratik', PratikSchema)
module.exports = Pratik;