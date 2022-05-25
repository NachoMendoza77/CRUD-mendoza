const {check} = require("express-validator")

const playerChecks = [
    check('name').not().isEmpty().withMessage("ingresar el nombre").isLength({ max: 20, min: 1 }).withMessage("Dederia contener 1-20 caracteres"),
    check('country').not().isEmpty().withMessage("ingresar el pais"),
    check('team').not().isEmpty().withMessage("Ingresar equipo")
]

module.exports = {playerChecks}