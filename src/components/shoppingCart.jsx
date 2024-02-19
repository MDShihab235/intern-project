import "../styles/shopping-cart.css";

const ShoppingCart = (props) => {
  // console.log(props);
  const cart = props.cart;

  // console.log(cartId);

  const handleDeleteProduct = () => {
    console.log("button clicked");

    for (let i = 0; i < cart.length; i++) {
      const index = cart.indexOf(cart[i]);
      const x = cart.splice(index, 1);
    }
  };
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.map((item) => {
        const { id, title, thumbnail, price } = item;
        return (
          <div key={id} id="item" className="cart-item">
            <img src={thumbnail} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>{price}</p>
            </div>
            <button onClick={() => handleDeleteProduct()}>remove</button>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default ShoppingCart;
