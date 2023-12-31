import mongoose, { Document, Schema } from "mongoose";

interface IProduct {
    name: string
    price: number
    productImage: string
}

interface IProductDocument extends IProduct, Document { }

const productSchema = new Schema<IProductDocument>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    productImage: { type: String, required: true }
}, { versionKey: false })

export default mongoose.model('Product', productSchema)