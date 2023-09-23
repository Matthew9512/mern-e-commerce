import { TableHead } from './TableHead';

export const Table = ({ headers, children }) => {
   return (
      <table className='w-full text-center mt-12'>
         <tr className='tableRow'>
            <TableHead headers={headers} />
         </tr>
         {children}
      </table>
   );
};
