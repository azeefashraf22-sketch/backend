import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({

    user: {
        type: String,
        required: [true, "Name is required!"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }


}, { timestamps: true })

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 12)
})

export default User = mongoose.model("User", userSchema)