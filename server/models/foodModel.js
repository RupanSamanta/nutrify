const foodSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true, unique: true },
    calorie: { type: Number, required: true, unique: true },

})

export default mongoose.model("Food", foodSchema);