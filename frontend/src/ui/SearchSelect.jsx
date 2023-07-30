export const SearchSelect = ({ options, label, onHandleFn, category }) => {
  return (
    <div className="flex flex-col shadow-sm">
      <span>{label}</span>
      <select
        data-category={category}
        onClick={(e) => onHandleFn(e)}
        className="w-56 rounded-md px-4 py-2 outline-0"
      >
        <option hidden value=""></option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
