const express = require("express")
const router = express.Router()
const produit = require("../Models/produit")

//@api : http:localhost:2712/api/produits
//desc:get all

router.get("/", async (req,res)=>{
try {
    const getAll = await produit.find()
    
    res.status(200).json(getAll)
}
catch (error) {
    res.status(500).json({errors:error})
}
    
})
router.get("/:id", async (req,res)=>{
    const id = req.params.id
    try {
        const prod = await produit.findById(id)
        
        res.status(200).json(prod)
    }
    catch (error) {
        res.status(500).json({errors:error})
    }
        
    })

router.post ("/",async (req,res)=>{

    const {Name,Category,Prix,Description,Photo}= req.body
    const newProduit = new produit({Name,Category,Prix,Description,Photo})
    try {
        const addResult = await newProduit.save()
        res.status(200).json("product added "+addResult)
    }catch (error){
        res.status(500).json("error "+error)}

})
module.exports= router ;