const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req, res) => {
   try {
      const session = await stripe.checkout.sessions.create({
         mode: 'payment',
         line_items: [
            {
               price_data: {
                  currency: 'usd',
                  product_data: {
                     name: 'test product',
                  },
                  unit_amount: 2000,
               },
               quantity: 1,
            },
         ],
         success_url: `${process.env.BASE_URL}/success`,
         cancel_url: `${process.env.BASE_URL}/cancel`,
      });
      res.redirect(session.url);
   } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).send('Error creating checkout session');
   }
};
