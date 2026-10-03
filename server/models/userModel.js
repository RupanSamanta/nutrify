import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    age: { type: Number, required: true, unique: true },
    height: { type: Number, required: true, unique: true }
})

export default mongoose.model("User", userSchema);
