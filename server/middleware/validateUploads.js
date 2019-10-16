const Joi = require('@hapi/joi');

const Rmail = (req, res, next) => {
    const schema = {
        sender_email: Joi.string().email().required(),
        recipient_email: Joi.string().email().required(),
        message: string
    }
    const result = Joi.validate(req.body, schema);
    if(result.error !== null) {
        return res.status(HttpStatus.Bad_REQUEST).send({
            status: HttpStatus.Bad_REQUEST,
            error: result.error.details[0].message,
        })
    } 
    next()
}

module.export = Rmail


