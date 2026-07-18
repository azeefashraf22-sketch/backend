import { userService } from "../services/userService.js"

export const user = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required!" })
        }

        const newUser = await userService({ name, email, password })

        res.status(201).json({ message: "User created successfully!", data: newUser })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}