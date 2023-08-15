export const Section = ({ children, style, border = false, header }) => {
   return (
      <section className={`mx-auto max-w-screen-xl`}>
         {border && <div className='border-t border-primaryBlack/40 pt-7'></div>}
         <h2 className='uppercase text-xl tracking-widest'>{header}</h2>
         <article className={`gap-6 p-6 relative min-h-[20em] ${style}`}>{children}</article>
      </section>
   );
};
// export const Section = ({ children, variant, header }) => {
//    const mainStyle = 'gap-6 p-6 relative min-h-[20em]';
//    const styles = {
//       gridAutoFit: `${mainStyle} py-24 grid place-items-center grid-cols-[repeat(auto-fill,minmax(16em,1fr))]`,
//       gridCols: `${mainStyle} py-24 grid place-items-center grid-cols-1 lg:grid-cols-3`,
//       flexRow: `${mainStyle} flex items-center justify-center flex-wrap`,
//       flexCol: `${mainStyle} py-24 flex flex-col items-center justify-center flex-wrap`,
//    };

//    return (
//       <section className='mx-auto max-w-screen-xl border-t border-primaryBlack/40'>
//          <h2 className='uppercase text-xl tracking-widest'>{header}</h2>
//          <article className={`${styles[variant]}`}>{children}</article>
//       </section>
//    );
// };
