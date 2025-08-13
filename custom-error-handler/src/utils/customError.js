// reusable class for error handling



class CustomError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
       
    }
}

module.exports = CustomError