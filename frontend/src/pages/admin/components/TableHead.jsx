function TableHead({ headers }) {
   return (
      <>
         {headers.map((value) => (
            <th className='uppercase' key={value}>
               {value}
            </th>
         ))}
      </>
   );
}

export default TableHead;
