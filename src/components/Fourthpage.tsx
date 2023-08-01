import Plant from "../assets/banner.png";
import { useDispatch, useSelector } from "react-redux";
import { Iperfume, addItem } from "./redux";

export default function Fourthpage() {
  const perfume = useSelector((state: any) => state.perfume);
  const dispatch = useDispatch();

  return (
    <div className="fourthpage">
      <h1>SHOP</h1>
      <div className="banner">
        <img src={Plant} alt="plant" />
        <img src={Plant} alt="plant" />
        <img src={Plant} alt="plant" />
      </div>

      <div className="card-container">
        {perfume.map((item: Iperfume) => {
          return (
            <div className="card" key={item.id}>
              <div className="bottle-plant-container">
                <img src={item.linkBottlePlant} />
              </div>
              <h4>{item.name}</h4>
              <div className="card-informations">
                <p>
                  <strong>Price :</strong> {item.price}$
                </p>
                <p>
                  <strong>Notes :</strong> {item.notes}
                </p>
              </div>
              <button onClick={() => dispatch(addItem(item))}>Buy now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
