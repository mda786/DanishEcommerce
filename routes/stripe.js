const router=require('express').Router();
const stripe=require('stripe')(process.env.STRIPE_KEY)


const YOUR_DOMAIN = 'http://localhost:5000';

router.post('/payment', async (req, res) => {
  stripe.charges.create({
    source:req.body.tokenId,
    amount:req.body.amount,
    currency:'inr'
  },(stripeErr,stripeRes)=>{
    if(stripeErr){
      res.status(500).json(stripeErr)
    }else{
      res.status(200).json(stripeRes)
    }
  })
  // const session = await stripe.checkout.sessions.create({
  //   line_items: [
  //     {
  //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //       price: 'wqe3',
  //       quantity: 1,
  //     },
  //   ],
  //   mode: 'payment',
  //   success_url: `${YOUR_DOMAIN}/success`,
  //   cancel_url: `${YOUR_DOMAIN}/pay`,
  // });

  // res.send({url:session.url});
});

module.exports=router