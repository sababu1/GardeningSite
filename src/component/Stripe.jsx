import React from 'react'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');
const Stripe = () => {
  return (
    <div>Stripe</div>
  )
}

export default Stripe

// publishable key: pk_test_51Nxv86K9S9ML5aMdyYa1s2TRdySaPApLS72T2n9hvxHUa3Bm9ocLyeOYT21gIhjcWlsuGbKRAL9OQkItelzZ04af00O7WJr65n

// secret key; sk_test_51Nxv86K9S9ML5aMdmmqY6hiUoxn1RNn8oKXvc3kHrHnzMPmqLwFqFBEet9MpvJWNGDRf3BFuv2fOyLwuo6xywRWu00HzsQV6J6