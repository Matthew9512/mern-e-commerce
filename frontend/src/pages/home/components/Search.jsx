// import { useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";
import { useMemo } from "react";
import { Input } from "../../../ui/Input";
import { MultiRangeSlider } from "../../../ui/MultiRangeSlider";
import { SearchSelect } from "../../../ui/SearchSelect";
import { Button } from "../../../ui/Button";
import { categoryArr, sortArr } from "../../../utils/constants";
import { useFilterParams } from "../../../api/useFilterParams";
import { handleNameFilter } from "../../../api/filterBy";

export const Search = ({ setEndpoint }) => {
  const { searchParams, clearFilters, handleSearchBy } =
    useFilterParams(setEndpoint);
  // const [searchParams, setSearchParams] = useSearchParams();

  // // clear all params
  // const clearFilters = () => {
  //   setSearchParams(searchParams.set("", ""));
  //   setEndpoint(`/products`);
  // };

  // // handle filter params
  // const handleSearchBy = (e) => {
  //   const click = e.target;

  //   if (!click.value) return;

  //   if (click.dataset.category === "category") {
  //     searchParams.set("category", click.value);
  //     setEndpoint(`/products/category/${click.value}`);
  //     searchParams.delete("sortBy");
  //   } else searchParams.set("sortBy", click.value);

  //   setSearchParams(searchParams);
  // };

  // const handleNameFilter = (e) => {
  //   const click = e.target;
  //   if (!click.value) return;
  //   setEndpoint(`/products/q?name=${click.value}`);
  // };

  const debounceFn = useMemo(
    () => debounce((e) => handleNameFilter(e, setEndpoint), 400),
    [],
  );

  return (
    <>
      {searchParams?.size > 0 && (
        <Button variant="primary" onHandleFn={clearFilters}>
          Clear filters
        </Button>
      )}
      <SearchSelect
        onHandleFn={handleSearchBy}
        options={categoryArr}
        label="Search by category"
        category="category"
      />
      <SearchSelect
        onHandleFn={handleSearchBy}
        options={sortArr}
        label="Filter by"
        category="filter"
      />
      <Input
        onHandleFn={debounceFn}
        type="text"
        label="Product name"
        placeholder="e.g. gloves"
        variant="primary"
      />
      <MultiRangeSlider onHandleFn={handleSearchBy} min={0} max={3000} />
    </>
  );
};
