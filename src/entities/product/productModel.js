import mongoose from 'mongoose'
var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

const productModelSchema = new Schema({
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null },
    name: String,
    description: String,
    image: String
});

const productModel = mongoose.model('Product', productModelSchema);

export default productModel