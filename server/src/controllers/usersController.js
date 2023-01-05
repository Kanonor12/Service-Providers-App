
export const getUsers = (req, res, next) => {
    console.log("Get users")
    res.send("Get users")
}

export const getUserById = (req, res, next) => {
    console.log("Get user by id")
    res.send("Get user by id")
}

export const updateUser = (req, res, next) => {
    console.log("Update user")
    res.send("Update user")
}

export const deleteUser = (req, res, next) => {
    console.log("Delete user")
    res.send("Delete user")
}