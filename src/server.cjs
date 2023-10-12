const stripe = require('stripe')('sk_test_51Nxv86K9S9ML5aMdmmqY6hiUoxn1RNn8oKXvc3kHrHnzMPmqLwFqFBEet9MpvJWNGDRf3BFuv2fOyLwuo6xywRWu00HzsQV6J6');
const express = require('express');
const app = express();
const YOUR_DOMAIN = 'http://localhost:5173/';

app.use(express.static('public'));
app.use(express.json());

app.post('/Stripe', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: '{{price_1O07QaK9S9ML5aMd7KEd3LSl}}', // Replace with the actual Price ID from your Stripe Dashboard
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.json({ id: session.id });
});

app.listen(5173, () => console.log('Running on port 5173'));


// const express = require("express");
// const app = express();
// // This is your test secret API key.
// const stripe = require("stripe")('sk_test_51Nxv86K9S9ML5aMdmmqY6hiUoxn1RNn8oKXvc3kHrHnzMPmqLwFqFBEet9MpvJWNGDRf3BFuv2fOyLwuo6xywRWu00HzsQV6J6');

// app.use(express.static("public"));
// app.use(express.json());

// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

// app.post("/create-payment-intent", async (req, res) => {
//   const { items } = req.body;

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: "usd",
//     // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });


// app.listen(4242, () => console.log("Node server listening on port 4242!"));