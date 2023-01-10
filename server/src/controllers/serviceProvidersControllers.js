import Service from "../models/Service.js"

export const getServiceProviders = async (req, res, next) => {
    
    try {
        const services = await Service.find()
        res.status(200).json(services)
    } catch (error) {
        next(error);
    }
}

export const getServiceProviderById = async (req, res, next) => {
    try {
        const serviceProvider = await Service.findById(req.params.id)

        res.status(200).json(serviceProvider)
    } catch (error) {
        next(error);
    }
}

export const updateServiceProvider = async (req, res, next) => {
    try {
        const updateServiceProvider = await Service.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        )

        res.status(200).json(updateServiceProvider)
    } catch (error) {
        next(error);
    }
}

export const deleteServiceProvider =async (req, res, next) => {
   try {
        await Service.findByIdAndDelete(req.params.id)
        res.status(200).json("Service Provider deleted")
   } catch (error) {
    next(error);
   }
}



