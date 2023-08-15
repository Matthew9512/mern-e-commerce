import { motion } from 'framer-motion';

const transition = (Component) => {
   return () => (
      <>
         <Component />
         {/* <motion.div
            className='slide-in'
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
         /> */}
         <motion.div
            className='slide-out'
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
         />
      </>
   );
};

export default transition;
