

export const getServiceProviders = (req, res, next) => {
    console.log("Get service providers")
    res.send("Get service providers")
}

export const getServiceProviderById = (req, res, next) => {
    console.log("Get service provider by id")
    res.send("Get service provider by id")
}

export const updateServiceProvider = (req, res, next) => {
    console.log("Update service provider")
    res.send("Update service provider")
}

export const deleteServiceProvider = (req, res, next) => {
    console.log("Delete service provider")
    res.send("Delete service provider")
}