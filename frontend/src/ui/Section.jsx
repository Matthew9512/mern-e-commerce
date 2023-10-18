function Section({ children, customClass, border = false, header, ...props }) {
   return (
      <section className={`mx-auto max-w-screen-xl p-3 pageTransition mix-blend-multiply`} {...props}>
         {border && <div className='border-t border-primaryBlack/40 pt-7'></div>}
         <h2 className='uppercase text-xl tracking-widest'>{header}</h2>
         <article className={`gap-6 lg:p-6 relative min-h-[20em] ${customClass}`}>{children}</article>
      </section>
   );
}

export default Section;
