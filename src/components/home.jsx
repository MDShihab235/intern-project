import { useEffect } from "react";
import { useState } from "react";
import "../styles/home.css";
import Product from "./product";
import ShoppingCart from "./shoppingCart";

const Home = () => {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };
    getProducts();
  }, [products]);
  return (
    <div className="home">
      <h2>Total cart items: {cart.length}</h2>
      <div className="shopping-cart-container">
        <ShoppingCart cart={cart} />
      </div>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <label htmlFor="true">Search Products</label>
          <input
            id="searchInput"
            type="text"
            placeholder="Search by product name ..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </div>

      <section className="price-filter-container">
        <h3>Product filtering by price</h3>
        <p>Price: {priceFilter}</p>

        <div className="price-filter">
          <label htmlFor="true">
            Show product less than Price: {priceFilter}
          </label>
          <input
            type="number"
            placeholder="Filter by maximum price"
            value={priceFilter}
            onChange={(e) => {
              setPriceFilter(e.target.value);
            }}
          />
        </div>
      </section>

      <div>
        {products
          ?.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }

            console.log(typeof val.price);
            console.log(typeof priceFilter);

            if (val.price <= parseInt(priceFilter)) {
              return val;
            }
          })
          .map((product) => {
            return (
              <Product
                key={product.id}
                handleAddProduct={handleAddProduct}
                product={product}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
