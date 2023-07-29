export const SaleBanner = () => {
  const sale = 50;

  return (
    <div className="bg-purple-800">
      <p className="py-2 text-center text-purple-200">
        Sale, now up to -{sale}%
      </p>
    </div>
  );
};
