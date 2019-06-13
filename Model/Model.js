var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var dbCollection = process.env.DB_COLLECTION;
var dbName = process.env.DB_NAME;
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
    {
        collection: dbCollection
    }
);

userSchema.plugin(mongoosePaginate);
var User = module.exports = mongoose.model(dbName, userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}