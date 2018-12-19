const getProducts = async () => {
  return await (await fetch('/data/products.json').then(response =>
    response.json()
  ));
};

export { getProducts };
