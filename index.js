const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const userRouter=require('./routes/user')
const authRouter=require('./routes/auth')
const productRouter=require('./routes/product')
const orderRouter=require('./routes/order')
const cartRouter=require('./routes/cart')
const cors=require('cors')
const stripeRoute=require('./routes/stripe')
const path=require('path')

dotenv.config()

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL).then(()=>console.log('DB connection successful')).catch((err)=>{console.log(err)})

const app=express()
const port=5000
app.use(cors())

app.use(express.static(path.join(__dirname,'/ecommerce-web/build')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/ecommerce-web/build/index.html'))
})
 


app.use(express.json())
app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/products',productRouter)
app.use('/api/orders',orderRouter)
app.use('/api/carts',cartRouter)
app.use('/api/checkout',stripeRoute)



app.listen(process.env.PORT||port,(req,res)=>{
    console.log('server running on 5000 port');
})