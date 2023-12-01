import mongoose, {Document, Schema} from "mongoose";

interface IProduct {
    name: string
    price: number
}

interface IProductDocument extends IProduct, Document {}

const productSchema = new Schema<IProductDocument>({
    name: String,
    price: Number
})

export default mongoose.model('Product', productSchema)