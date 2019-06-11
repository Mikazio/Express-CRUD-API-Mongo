var mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    first_name: String,
    last_name: String,
    Car_Brands: String,
    Car_Colours: String,
    Car_Years: String,
    gender: String
    },
    {collection: 'test'}
);

// Export users model
var User = module.exports = mongoose.model('test', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}