const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

var welcome="Congratualtions...,! Successfully completed."

//post vehicle 

router.post("/", async (req, res) => {
    let data = await User.create(req.body);

    return res.status(201).send({data,welcome});
})


router.get("/", async (req, res) => {
    let data = await User.find().lean().exec();


    return res.status(200).send({data,welcome})
})

router.patch("/update/:id", async (req, res) => {
    let data = await User.findByIdAndUpdate(req.params.id, req.body, {new : true});

    return res.status(201).send({data});
})



//findbyid 


router.get("/one/:id", async (req, res) => {
    let data = await User.findById(req.params.id).lean().exec();

    return res.status(200).send({data});
})




module.exports = router;