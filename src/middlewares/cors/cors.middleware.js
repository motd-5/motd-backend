const corsMiddleware = (req, res, next) => {
    return next();
};

module.exports = corsMiddleware;
