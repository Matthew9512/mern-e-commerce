export const SaleBanner = () => {
  const sale = 50;

  return (
    <div className="bg-secondaryWhite">
      <p className="py-2 text-center">Sale, now up to -{sale}%</p>
    </div>
  );
};
