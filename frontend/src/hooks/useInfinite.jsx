import { useEffect, useRef } from 'react';

export const useInfitite = (observerTarget, endpoint, data) => {
   // export const useInfitite = (fetchData, endpoint, data, observerTarget) => {
   let pagination = useRef();

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            if (entries[0].isIntersecting) {
               console.log(`yey`);
               //    fetchData(
               //       {
               //          url: `${endpoint}&token=${pagination.current}`,
               //       },
               //       true
               //    );
            }
         },
         { threshold: 1 }
      );

      if (observerTarget.current) {
         observer.observe(observerTarget.current);
      }

      return () => {
         if (observerTarget.current) {
            observer.unobserve(observerTarget.current);
         }
      };
   }, [observerTarget.current]);

   //    save pagination token
   useEffect(() => {
      if (!data?.continuation) return;
      pagination.current = data?.continuation;
   }, [data]);
};
