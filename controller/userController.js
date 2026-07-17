import { userService } from "../services/userService.js"
import { User } from "../model/user.model.js"

export const user = async (req, res) => {
    try {
        // const { user, email, password } = req.body
        if (!user || !email || !password) {
            return res.status(400).json({ message: "All fields are required!" })
        }

        const user = await userService({
            name,
            email,
            password
        })

        res.status(201).json({ message: "User created successfully!", user })
        console.log("User->", user);


    } catch (error) {
        console.log(error.message);
    }
}