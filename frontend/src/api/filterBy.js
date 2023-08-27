/**
 * @todo change to switch
 */

//
export const filterBy = (sortByParams, productsQuery) => {
   let filteredData;

   // return unchanged data if there is no filter params
   if (sortByParams === 'all') filteredData = productsQuery.data?.products;

   // return new arr filtered by price up
   if (sortByParams === 'price-up')
      filteredData = productsQuery.data?.products.slice().sort((a, b) => +a.price - +b.price);

   // return new arr filtered by price down
   if (sortByParams === 'price-down')
      filteredData = productsQuery.data?.products.slice().sort((a, b) => +b.price - +a.price);

   // return new arr filtered by name
   if (sortByParams === 'name')
      filteredData = productsQuery.data?.products.slice().sort((a, b) => a.name.localeCompare(b.name));

   // return new arr filtered by active discount
   if (sortByParams === 'discount') filteredData = productsQuery.data?.products.filter((product) => product.discount);

   // data => filter => sort price range !!!!!
   // filteredData = productsQuery.data?.products;
   return filteredData;
};

// fetch products by value form input => by name search
export const handleNameFilter = (e, setEndpoint) => {
   const click = e.target;
   if (!click.value) return;
   setEndpoint(`/products/q?name=${click.value}`);
};
