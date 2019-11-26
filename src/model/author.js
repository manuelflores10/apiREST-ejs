var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
    {
      first_name: {type: String, required: true, max: 100},
      family_name: {type: String, required: true, max: 100},
      date_of_birth: {type: String},
      date_of_death: {type: String}
    }
  );

module.exports = mongoose.model('Authors', AuthorSchema);