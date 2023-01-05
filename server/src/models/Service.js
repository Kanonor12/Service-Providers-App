import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    otherServices: {
        type: [String],
    },
},  {timestamps: true,} )

export default mongoose.model("Service", ServiceSchema)