import Service from "../models/Service.js"


export const loginUser = (req,res) => {
    console.log('User authentication endpoint')
    res.send('User authentication endpoint')
}

export const registerService = async (req,res) => {
   
    const newService = new Service(req.body)

    try {
        const savedService = await newService.save()
        res.status(200).json(savedService)
    } catch (error) {
        res.status(500).json(error)
    }
}


export const registerUser = (req,res) => {
    console.log('User registration endpoint')
    res.send('User registration endpoint')
}