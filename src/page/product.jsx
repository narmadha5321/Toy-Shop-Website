import "../App.css";

function Product({ products, addToCart }) {
  return (
    <div className="pro">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cardBody">
            <h2>{item.name}</h2>

            <h3>₹ {item.price}</h3>

            <button
              onClick={() => addToCart(item)}
              className="addBtn"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;