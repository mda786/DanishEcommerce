const Order = require('../models/Order');
const {verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin } = require('./verifyToken');
const router=require('express').Router();

//Create
router.post('/',verifyToken,async (req,res)=>{
    const newOrder=new Order(req.body)
    try{
        const savedOrder=await newOrder.save()
        res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})
//update
router.put('/:id',verifyTokenandAdmin,async (req,res)=>{
    try{
        const updatedOrder=await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})

        res.status(200).json(updatedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})

//Delete
router.delete('/:id',verifyTokenandAdmin,async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json('Order has been deleted')

    }catch(err){
        res.status(500).json(err)
    }
})

//Get User Orders
router.get('/find/:id',verifyTokenandAuthorization,async(req,res)=>{
    try{
        const orders=await Order.findById(req.params.id)
        res.status(200).json(orders)

    }catch(err){
        res.status(500).json(err)
    }
})

//Get All Orders

router.get('/',verifyTokenandAdmin,async (req,res)=>{
    try{
        const orders=await Order.find()
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get Monthly Income
router.get('/income',verifyTokenandAdmin,async(req,res)=>{
    const date=new Date()
    const lastYear=new Date(date.setFullYear(date.getFullYear()-1))
    try{
        const month=await Order.aggregate([
            {
                $match:{createdAt:{$gte:lastYear}}
            },
            {
                $project:{
                    month:{$month:"$createdAt"},
                    sales:"$amount"
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"}
                }
            }
        ]) 
        res.status(200).json(month)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports=router