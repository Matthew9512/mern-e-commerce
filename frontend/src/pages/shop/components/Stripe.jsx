import Image from '../../../ui/Image';

function Stripe() {
   return (
      <article className='md:w-2/5 w-full rounded-xl text-center'>
         <div className='lg:w-full w-4/5 mx-auto'>
            <Image image='online-transactions.png' />
            <p className='text-lg'>
               Online payments are currently unavailable, we are working on it. We ask for your understanding and
               patience.
            </p>
         </div>
      </article>
   );
}

export default Stripe;
