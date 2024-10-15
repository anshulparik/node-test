export const methodCheck = (req, res, next) => {
    console.log(req.method);
    next()
}

export const checkURL = (req, res, next) => {
    console.log(req.url);
    next()
}

export const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.send(`error: ${err}`)
}