export const Section = ({ children, variant, header }) => {
  const mainStyle = "gap-6 p-6 relative min-h-[20em]";
  const styles = {
    gridAutoFit: `${mainStyle} py-24 grid place-items-center grid-cols-[repeat(auto-fill,minmax(16em,1fr))]`,
    gridCols: `${mainStyle} py-24 grid place-items-center grid-cols-1 lg:grid-cols-3`,
    flexRow: `${mainStyle} flex items-center justify-center flex-wrap`,
    flexCol: `${mainStyle} py-24 flex flex-col items-center justify-center flex-wrap`,
  };

  return (
    <section className="mx-auto max-w-screen-xl border-t border-primaryBlack/40">
      <p className="py-4 text-lg font-semibold">{header}</p>
      <article className={`${styles[variant]}`}>{children}</article>
    </section>
  );
};
