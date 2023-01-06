import bcrypt from 'bcrypt';

import Service from "../models/Service.js"
import User from "../models/Users.js"


export const loginUser = async (req,res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email})
        if (!user) return res.status(404).json("User not found")

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
          );
        if (!isPasswordCorrect) return res.status(400).json("Wrong password or username")
        console.log(user)
        res.status(201).json(`User ${user.firstName} ${user.lastName} logged in successfully`)
    } catch (error) {
        console.log(error)
        
    }
}

export const registerService = async (req,res, next) => {
   
    const newService = new Service(req.body)

    try {
        const savedService = await newService.save()
        res.status(200).json(savedService)
    } catch (error) {
        res.status(500).json(error)
    }
}


export const registerUser =async (req,res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
        ...req.body,
        password: hash,
    })

    try {
        const savedUser = await newUser.save()
        res.status(200).send(savedUser)
    } catch (error) {
        res.status(500).send(error)
    }
}