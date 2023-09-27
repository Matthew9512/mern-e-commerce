import { useState } from 'react';

export const usePagination = () => {
   const [page, setPage] = useState(1);

   const onHandleReq = (e) => {
      const click = e.target;

      if (click.dataset.type === 'prev') setPage((prev) => prev - 1);
      if (click.dataset.type === 'next') setPage((prev) => prev + 1);
   };

   return { page, setPage, onHandleReq };
};
