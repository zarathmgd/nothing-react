import { useDispatch, useSelector } from "react-redux";
import PerfumeBottle from "../assets/perfume-bottle.png";
import Plant from "../assets/plant-firstpage.png";
import { setCartVisibility } from "./redux";

export default function Firstpage() {
  const cartVisibility = useSelector((state: any) => state.cartVisibility);
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const cartToggle = () => {
    !cart.length ? alert("Empty array... Please, add a product.") : dispatch(setCartVisibility(cartVisibility));
  };

  return (
    <div className="firstpage">
      <nav>
        <h1>NOTHING</h1>
        <ul>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <a href="">
            <button>Shop now</button>
          </a>
          <i className="fa-solid fa-bag-shopping" onClick={cartToggle}></i>
        </div>
      </nav>
      <hr />
      <div className="firstpage-content">
        <h2>
          Improve your personnality <br /> - <br /> <span>NOTHING</span>
        </h2>
        <div className="firstpage-informations">
          <p>
            <span>+</span>
            <span className="informations-number">4</span> perfumes
          </p>
          <p>
            <span>+</span>
            <span className="informations-number">1M</span> sells
          </p>
        </div>
        <div className="main-content">
          <img src={PerfumeBottle} alt="perfume bottle" className="perfume-bottle" />
          <div className="circle"></div>
          <img src={Plant} alt="plant" />
        </div>
      </div>
    </div>
  );
}
