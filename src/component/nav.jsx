import { MdOutlineShoppingCart } from "react-icons/md";
import "../App.css";

function Nav({ count, openCart }) {
  return (
    <div className="nav">
      <h1>Toy Shop</h1>

      <div className="icon" onClick={openCart}>
        <MdOutlineShoppingCart />
        <span>{count}</span>
      </div>
    </div>
  );
}

export default Nav;