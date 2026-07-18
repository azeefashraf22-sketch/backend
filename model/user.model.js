import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({

    name: {
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
    }


}, { timestamps: true })

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 12)
})

const User = mongoose.model("User", userSchema)

export default User