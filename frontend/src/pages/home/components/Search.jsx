import { Input } from "../../../ui/Input";
import { MultiRangeSlider } from "../../../ui/MultiRangeSlider";
import { SearchSelect } from "../../../ui/SearchSelect";

export const Search = () => {
  const handleSearchBy = (e) => {
    if (!e.target.value) return;
    console.log(e.target.value);
    //  clear values but not a price values
  };

  // arrays of search by values
  const categoryArr = ["boots", "gloves", "halmet"];
  const sortArr = ["sort by price", "sort by name"];

  return (
    <>
      <SearchSelect
        onHandleFn={handleSearchBy}
        options={categoryArr}
        label="Search by category"
      />
      <SearchSelect
        onHandleFn={handleSearchBy}
        options={sortArr}
        label="Filter by"
      />
      <Input
        onHandleFn={handleSearchBy}
        type="text"
        label="Product name"
        placeholder="e.g. gloves"
        variant="primary"
      />
      <MultiRangeSlider onHandleFn={handleSearchBy} min={0} max={2000} />
    </>
  );
};
