import mongoose from 'mongoose'
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

const recipeModelSchema = new Schema({
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
  name: String,
  description: String,
  ingredients: [String]
});

const recipeModel = mongoose.model('Recipe', recipeModelSchema);

export default recipeModel