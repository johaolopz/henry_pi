const { Router } = require("express");
const router = Router();
const { Type } = require ("../db.js");
module.exports = router;

router.get('/', async (req, res) =>{
    const dbTypes = await Type.findAll();
    res.status(200).json(dbTypes);
});