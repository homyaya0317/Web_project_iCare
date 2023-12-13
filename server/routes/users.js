const express = require("express");
const router = express.Router();
const Admin = require("./../Models/Users")



router.get("/credentials", async (req,res) => {
    try {
        const admin = await Admin.find()
        res.json(admin)
    } catch (error) {
        res.json({message:error})
    }
})



router.post("/", (req,res) => {
        console.log(req.body.userRole);
        const admin = new Admin({
            userFirstName: req.body.userFirstName,
            userSecondName : req.body.userSecondName,
            userEmail: req.body.userEmail,
            userRole:  req.body.userRole,
            userPassword: req.body. userPassword,
            userId:req.body.userId,
            userLocation: req.body.userLocation
        });

        admin.save()
            .then(data => {
                res.json(data)
            })
            .catch (err => {
                res.json({message:err})
        })
})



router.put("/:name", async (req,res) => {
    try {
        // console.log(req.params.name)
      
    } catch (error) {
        res.json({message:error})
        
    }

})

module.exports = router