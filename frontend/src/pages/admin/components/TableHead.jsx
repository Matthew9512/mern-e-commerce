export const TableHead = ({ headers }) => {
   return (
      <>
         {headers.map((value) => (
            <th key={value}>{value}</th>
         ))}
      </>
   );
};
