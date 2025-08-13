
// error middleware
// const errorHandler = (err, req, res, next) => {
//     const statusCode = err.statusCode || 500
//     const message = err.message || 'Internal Server Error'
//     res.status(statusCode).join({
//         success: false,
//         message,
//     })
// }
// module.exports = errorHandler

const CustomError = require("./customError")

const errorHandler = (err, req, res, next) => {
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        })
    }

    res.status(500).json({
        success: false,
        message: 'Internal Server Error'
    })
}
module.exports = errorHandler

