import { useState } from "react";
import "./App.css";

import Nav from "./component/Nav";
import Cart from "./component/Cart";
import Product from "./page/Product";

const products = [
  {
    id: 1,
    name: "Multicolour Teddy Bear",
    price: 499,
    image: "https://storio.in/cdn/shop/files/41GynUOtS8L.jpg?v=1712374436",
  },
  {
    id: 2,
    name: "Plush Panda Stuff Toy in Bamboo",
    price: 749,
    image: "https://homafy.com/wp-content/uploads/2024/09/panda-toy.jpg",
  },
  {
    id: 3,
    name: "Zipper Bunny Rabbit Soft Toy",
    price: 899,
    image: "https://m.media-amazon.com/images/I/61zL5gaecrL.jpg",
  },
  {
    id: 4,
    name: "8 Feet yellow duck",
    price: 2099,
    image: "https://m.media-amazon.com/images/I/51uboUciZoL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    name: "Mini Monster Truck Toy Car",
    price: 399,
    image: "https://rukminim3.flixcart.com/image/824/972/xif0q/shopsy-vehicle-pull-along/y/1/3/mini-monster-truck-pull-back-cars-toys-4-wheel-drive-vehicles-enriched-0-original-imagghwzky6cman2.jpeg?q=60&crop=false",
  },
  {
    id: 6,
    name: "Mini Toy Bike",
    price: 1999,
    image: "https://rdcbrothers.com/wp-content/uploads/2023/02/IMG-20250914-WA0063.jpg",
  },
  {
    id: 7,
    name: "Cube",
    price: 399,
    image: "https://ktla.com/wp-content/uploads/sites/4/2023/01/Rubiks-Cube.jpg",
  },
  {
    id: 8,
    name: "Barbie Set",
    price: 599,
    image: "https://media.istockphoto.com/id/520175996/photo/barbie.jpg?s=612x612&w=0&k=20&c=SSXleCnNucEqD_UomRp9KqUgseUjuBqmDL5L43VeztM=",
  },
  {
    id: 9,
    name: "3D Wooden puzzless",
    price: 899,
    image: "https://craftdeals.in/wp-content/uploads/2024/08/Jigsaw-wooden-alphabets-number-puzzle.webp",
  },
  {
    id: 10,
    name: "Wooden Chess Board",
    price: 649,
    image: "https://mmtoyworld.com/cdn/shop/files/MMTOYSClassicWoodenHandmadeFoldableChessSet_16x16InchDurableWoodBoardforAdults_Kids_Elegant_PortableDesign_PerfectGift_dd2f6da8-4576-477c-a15e-4b2372cfacb5.jpg?v=1725274715",
  },
  {
    id: 11,
    name: "Wooden Carrom Board",
    price: 1099,
    image: "https://m.media-amazon.com/images/I/71qVJH56m-L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 12,
    name: "Wooden Memory Chess Game ",
    price: 849,
    image: "https://images.meesho.com/images/products/723536177/8uoqc_512.webp?width=512",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const clearCart = () => {
  setCart([]);
};

  return (
    <>
      <Nav
        count={cart.length}
        openCart={() => setShowCart(true)}
      />

      <Product
        products={products}
        addToCart={addToCart}
      />

      {showCart && (
        <Cart
          cart={cart}
          closeCart={() => setShowCart(false)}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          clearCart={clearCart}
        />
      )}
    </>
  );
}

export default App;