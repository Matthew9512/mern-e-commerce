const nodemailer = require('nodemailer');
const usersModel = require('../models/usersModel');

const checkUsersData = async function (userID, res) {
   const findUser = await usersModel.findById(userID);

   if (findUser.usersData.name === '')
      return res
         .status(404)
         .json({ message: `Please finish your registration process and complete your personal data` });
};

const emailOptions = (email, username, order) => {
   //    return;
   const clientTemplate = order
      .map(
         (product) =>
            `<p>Name: ${product?.name}</p>
                 <p>Price: ${product?.price}</p>
                 <p>Amount: ${product?.amount}</p>
                 <p>Size: ${product?.size}</p>`
      )
      .join('');

   // to client
   const html = `
         <h1>Hello ${username}</h1>
         <p>Thank you for your purchase</p>
         <p>Product purchase correctly, if you have any questions, please contact us by phone</p>
         <p>Your order details:</p>
         ${clientTemplate}
         <p>Message generated automatically, please do not reply to it</p>`;

   const recipientsOptionsArr = [{ email: email, html: html }];
   // const recipientsOptionsArr = [{ email: process.env.mail_reciver_user, html: html }];

   return recipientsOptionsArr;
};

const sendNotifications = async (usersOrder, order, next) => {
   // email adress and html template

   const recipientsOptionsArr = emailOptions(usersOrder.email, usersOrder.username, order);

   // email account from where mails are send
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.mail_sender_user,
         pass: process.env.mail_sender_pass,
      },
   });

   recipientsOptionsArr.forEach(async (value) => {
      try {
         // reciver of mails
         const reciver = await transporter.sendMail({
            from: `FIRMA <${process.env.mail_sender_user}>`,
            subject: 'mern',
            to: value.email,
            html: value.html,
         });
      } catch (error) {
         next(error.message);
      }
   });
};

module.exports = { checkUsersData, sendNotifications };
