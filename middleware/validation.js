const {Player} = require("../models/player")

const validarId = async (req, res, next) => {
    try {
        const pla = await Player.findById(req.params.id)
        if (Player !== null) {
            next();
        } else {
            res.status(400).json({msg: "id incorrecto"})
        }
    } catch (error) {
        res.status(400).json({msg: "Chequear id / id incorrecto", error})
    }
} 

module.exports = {validarId}