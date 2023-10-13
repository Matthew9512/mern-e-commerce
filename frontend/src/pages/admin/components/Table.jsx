import TableHead from './TableHead';

function Table({ headers, children }) {
   return (
      <div className='w-full overflow-auto'>
         <table className='w-full text-center border border-primaryGrey'>
            <thead>
               <tr className='h-16'>
                  <TableHead headers={headers} />
               </tr>
            </thead>
            <tbody>{children}</tbody>
         </table>
      </div>
   );
}

export default Table;
