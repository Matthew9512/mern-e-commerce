export const LoadingSpinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-md">
      <div className="loader"></div>
    </div>
  );
  // return (
  //   <div className="loading__wrapper">
  //     <span className="spinner"></span>
  //   </div>
  // );
};
