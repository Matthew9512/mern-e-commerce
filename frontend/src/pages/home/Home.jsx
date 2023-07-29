import { useQuery } from "@tanstack/react-query";
import { Slider } from "./components/Slider";
import { Section } from "../../ui/Section";
import { ProductsCart } from "../../ui/ProductsCart";
import { TestiminalCart } from "./components/TestiminalCart";
import { LoadingSpinner } from "../../ui/LoadingSpinner";
import { getFeatures } from "../../api/getFeatures";
import { Search } from "./components/Search";
import { ErrorMessage } from "../../ui/ErrorMessage";

export const Home = () => {
  const featuresQuery = useQuery({
    queryKey: ["features"],
    queryFn: () => getFeatures("/products"),
  });

  return (
    <>
      <Slider />
      <Section variant="flexRow">
        <Search />
      </Section>
      <Section variant="gridAutoFit" header="Features List">
        {featuresQuery.isLoading && <LoadingSpinner />}
        {featuresQuery.error && <ErrorMessage message={"no products yet"} />}
        {featuresQuery.data &&
          featuresQuery.data.map((product) => (
            <ProductsCart key={product._id} product={product} />
          ))}
      </Section>
      <Section variant="gridCols" header="Users comments">
        <TestiminalCart style="first" />
        <TestiminalCart style="second" />
        <TestiminalCart style="second" />
        <TestiminalCart style="third" />
      </Section>
    </>
  );
};
