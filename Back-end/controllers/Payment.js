
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.Payment = async (req, res)=>{
    try{
        
        const paymentIntent = await stripe.paymentIntents.create({
          
            amount: req.body.amount,
            currency: "usd",

        })


        res.status(200).send(paymentIntent.client_secret);

    } catch(err){
        res.status(500).json({message: err.message})

    } 

}