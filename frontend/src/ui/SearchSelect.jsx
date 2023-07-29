export const SearchSelect = ({ options, label, onHandleFn }) => {
  return (
    <div className="flex flex-col">
      <span>{label}</span>
      <select
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
