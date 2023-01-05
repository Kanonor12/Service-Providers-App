import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
     firstName: {
        tye: String,
     },
    lasttName:{
         type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
    },
    district: {
        type: String,
        required: true,
    },
    town: {
        type: String,
        required: true,
    },
    password:{
         type: String,
        required: true,
    },
    isAdmin: {
        type: String,
        default: false,
    },
    isServiceProvider: {
        type: String,
        default: false,
    },
    },
    {timestamps: true,} 
)

export default mongoose.model("User", UserSchema)