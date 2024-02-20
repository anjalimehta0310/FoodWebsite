export function filterData(searchText, allRestaurants) {
    const filteredData = allRestaurants.filter((restaurant) => {
      return restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
  
    return filteredData;
}


export function filterProductData(searchText, products) {
  console.log("Search Text:", searchText);
  const filteredProductdata = products.filter((product) => {
    console.log("Product Display Name:", product.displayName);
    return product?.displayName?.toLowerCase()?.includes(searchText.toLowerCase());
  });
  return filteredProductdata;
}