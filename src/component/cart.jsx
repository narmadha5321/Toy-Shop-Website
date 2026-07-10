import { GiCancel } from "react-icons/gi";
import "../App.css";

function Cart({ cart, closeCart, increaseQty, decreaseQty, clearCart }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart">

      <div className="box1">
        <h2>Basket</h2>
        <GiCancel
          className="close"
          onClick={closeCart}
        />
      </div>

      <div className="items">

        {cart.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>
            Cart is Empty
          </h3>
        ) : (
          cart.map((item) => (
            <div className="cartItem" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="details">
                <h4>{item.name}</h4>
                <p>₹ {item.price}</p>

                <div className="qty">

                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    +
                  </button>

                </div>
              </div>

            </div>
          ))
        )}

      </div>

      <div className="box2">
        <h2>Total</h2>
        <h2>₹ {total}</h2>
      </div>

    </div>
  );
}

export default Cart;