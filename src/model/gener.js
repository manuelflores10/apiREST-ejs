var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var GenerSchema = new Schema(
    {
      name: {type: String},
      url: {type: String}
    }
  );

module.exports = mongoose.model('Geners', GenerSchema);