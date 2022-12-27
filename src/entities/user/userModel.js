import mongoose from 'mongoose'
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

const userModelSchema = new Schema({
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
  name: String,
  email: String,
  password: String
});

const userModel = mongoose.model('User', userModelSchema);

export default userModel