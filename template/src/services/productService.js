
const getProducts = () => { fetch("http://localhost:3500/api/bubbles").then((res) => res.json()).then((res) => setData(res))};
const getProductsById = id => getProducts.find(n => n.id == id);

export {
    getProducts,
    getProductsById,
};