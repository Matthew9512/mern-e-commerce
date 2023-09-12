const productsModel = require('../models/productsModel');
const usersModel = require('../models/usersModel');
const usersUtils = require('../utils/usersFn');

const stripe = require('stripe')(process.env.STRIPE_KEY);

const stripeConfig = async function (userID, order, res) {
   console.log(userID, order);

   try {
      const stripeSession = await stripe.checkout.sessions.create({
         payment_method_types: ['card'],
         mode: 'payment',
         line_items: order.map((product) => {
            const description = `amount ${String(product?.amount + 'size').concat(product?.size)}`;

            return {
               price_data: {
                  currency: 'usd',
                  product_data: {
                     name: product?.name,
                     images: [product?.image],
                     description,
                  },
                  unit_amount: product?.price * 100,
               },
               quantity: product?.amount,
            };
         }),
         success_url: `http://127.0.0.1:5173/success`,
         cancel_url: `http://127.0.0.1:5173/cancel`,
      });

      res.json({ url: stripeSession.url });
   } catch (error) {
      console.log(error.message);
   }
};

const stripeWebook = async function (req, res, next) {
   const event = request.body;

   console.log(`stripe webhook`);

   // Handle the event
   switch (event.type) {
      case 'payment_intent.succeeded':
         const paymentIntent = event.data.object;
         const usersOrder = await usersModel
            .findByIdAndUpdate(
               { _id: userID },
               {
                  $push: { orderHistory: order },
               },
               { new: true }
            )
            .select('_id username email orderHistory createdAt');

         const productData = order.map((product) => {
            return {
               productID: product.productID,
               productSize: product.size,
               productAmount: product.amount,
            };
         });

         productData.forEach(async (product) => {
            await productsModel.updateOne(
               { _id: product.productID, 'sizesArr.size': product.productSize },
               { $inc: { 'sizesArr.$.available': -product.productAmount } }
            );
         });

         await usersUtils.sendNotifications(usersOrder, order, next);

         res.status(200).json({ usersOrder, message: `Product purchase correctly` });
         // Then define and call a method to handle the successful payment intent.
         // handlePaymentIntentSucceeded(paymentIntent);
         break;
      case 'payment_method.attached':
         const paymentMethod = event.data.object;
         // Then define and call a method to handle the successful attachment of a PaymentMethod.
         // handlePaymentMethodAttached(paymentMethod);
         break;
      // ... handle other event types
      default:
         console.log(`Unhandled event type ${event.type}`);
   }

   // Return a response to acknowledge receipt of the event
   res.json({ received: true });
};

module.exports = { stripeConfig, stripeWebook };
