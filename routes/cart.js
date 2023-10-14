const Cart = require('../models/Cart');
const {verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin } = require('./verifyToken');
const router=require('express').Router();

//Create
router.post('/',verifyToken,async (req,res)=>{
    const newCart=new Product(req.body)
    try{
        const savedCart=await newCart.save()
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
})
//update
router.put('/:id',verifyTokenandAuthorization,async (req,res)=>{
    try{
        const updatedCart=await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})

        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//Delete
router.delete('/:id',verifyTokenandAuthorization,async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json('Cart has been deleted')

    }catch(err){
        res.status(500).json(err)
    }
})

//Get Cart
router.get('/find/:id',verifyTokenandAuthorization,async(req,res)=>{
    try{
        const cart=await Cart.findById(req.params.id)
        res.status(200).json(cart)

    }catch(err){
        res.status(500).json(err)
    }
})

//Get All Cart

router.get('/',verifyTokenandAdmin,async (req,res)=>{
    try{
        const carts=await Cart.find()
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)  
    }
})



module.exports=router