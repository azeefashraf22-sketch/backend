import User from "../model/user.model.js"
import bcrypt from "bcrypt"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {

            return res.status(400).json({ message: "Email and password are required!" });
        }
        const user = await User.findOne({ email });
        if (!user) {

            return res.status(401).json({ message: "Invalid email or password!" });

        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {

            return res.status(401).json({ message: "Invalid email or password!" });

        }
        return res.status(200).json({ message: "Login successfully!", data:user });
    } catch (error) {

        return res.status(500).json({ message: "Server error!", error: error.message });

    }
}