import { useSelector } from "react-redux";
import { Iperfume } from "./redux";

export default function Cart() {
  const cart = useSelector((state: any) => state.cart);
  const cartVisibility = useSelector((state: any) => state.cartVisibility);

  return (
    <div className="cart" style={cartVisibility ? { display: "flex" } : { display: "none" }}>
      <h1>Cart</h1>
      <hr />
      <ul className="cart-content-container">
        {cart.map((item: any) => (
          <li className="cart-item" key={item.id}>
            <span className="item-name">{item.name}</span>
            <span> x{item.quantity} - </span>
            <span>
              <strong>{item.price * item.quantity}$</strong>
            </span>
          </li>
        ))}
      </ul>
      <hr className="bottom" />
      <p>
        Total:{" "}
        {cart.reduce((total: number, item: Iperfume) => {
          const curr = cart.find((i: Iperfume) => i.id === item.id);
          return total + curr.price * curr.quantity;
        }, 0)}
        $
      </p>
    </div>
  );
}
