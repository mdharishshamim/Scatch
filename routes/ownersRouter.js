const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

router.post("/create", async (req, res) => {
    let owners = await ownerModel.find();
    if(owners.length > 2) {
        return res
        .sendStatus(503)
        .send("You dont have permission to create new owner");
    }
    let {fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
    });
    res
    .sendStatus(201)
    .send(createdOwner);
})
router.get("/", (req, res) => {
    res.send("hey its working great");
});


module.exports = router;
