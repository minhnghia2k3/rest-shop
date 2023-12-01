import mongoose, { Document, Schema } from "mongoose";

interface IOrder {
    product: Schema.Types.ObjectId
    quantity: Number
}

interface IOrderDocument extends IOrder, Document { }

const orderSchema = new Schema<IOrderDocument>({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
}, { versionKey: false })

export default mongoose.model('Order', orderSchema)