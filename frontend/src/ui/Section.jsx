export const Section = ({ children, variant, header }) => {
  const mainStyle = "gap-6 bg-purple-500 p-6 text-purple-100 relative";
  const styles = {
    gridAutoFit: `${mainStyle} grid place-items-center grid-cols-[repeat(auto-fill,minmax(16em,1fr))]`,
    gridCols: `${mainStyle} grid place-items-center grid-cols-1 lg:grid-cols-3`,
    flexRow: `${mainStyle} flex items-center justify-center flex-wrap`,
    flexCol: `${mainStyle} flex flex-col items-center justify-center flex-wrap`,
  };

  return (
    <section className="mx-auto max-w-screen-xl">
      <p className="py-4 text-lg font-semibold">{header}</p>
      <article className={`${styles[variant]}`}>{children}</article>
    </section>
  );
};
