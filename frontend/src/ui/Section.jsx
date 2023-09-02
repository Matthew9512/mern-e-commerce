export const Section = ({ children, style, border = false, header, id }) => {
   return (
      <section className={`mx-auto max-w-screen-xl p-3 transition mix-blend-multiply`} id={id && id}>
         {border && <div className='border-t border-primaryBlack/40 pt-7'></div>}
         <h2 className='uppercase text-xl tracking-widest'>{header}</h2>
         <article className={`gap-6 lg:p-6 relative min-h-[20em] ${style}`}>{children}</article>
      </section>
   );
};
