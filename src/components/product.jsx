import "../styles/product.css";

const Product = (props) => {
  const { title, price, thumbnail, stock } = props.product;

  return (
    <main className="cart-items">
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
      <div>
        <p>stock:{stock}</p>
        <p>${price}</p>
      </div>
      <button onClick={() => props.handleAddProduct(props.product)}>
        Add to cart
      </button>
    </main>
  );
};

export default Product;
