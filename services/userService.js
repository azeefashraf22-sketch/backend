import { User } from "../model/user.model.js"

export const userService = async (user) => {
    const user = await User.create(user);
    return user;
}
