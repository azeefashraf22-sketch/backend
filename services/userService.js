import User from "../model/user.model.js"

export const userService = async (user) => {
    const newUser = await User.create(user);
    return newUser;
}

