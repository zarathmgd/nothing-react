import Visa from "../assets/visa.png";
import Mastercard from "../assets/mastercard.png";
import Paypal from "../assets/paypal.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h1 id="contact">NOTHING</h1>
        <div className="section-container">
          <div className="our-company">
            <h4>Our company</h4>
            <ul>
              <li>History</li>
              <li>Actualities</li>
              <li>Affiliates</li>
              <li>Join us</li>
            </ul>
          </div>

          <div className="our-services">
            <h4>Our services</h4>
            <ul>
              <li>Perfume shop</li>
              <li>Delivery</li>
            </ul>
          </div>

          <div className="contact">
            <h4>Contact</h4>
            <p>
              079 0896 8635 <br />
              84 Shore Street, <br />
              Stoke Lyne
            </p>
          </div>

          <div className="payment-methods">
            <h4>Payment methods</h4>
            <div className="payment-methods-container">
              <img src={Visa} alt="visa-logo" />
              <img src={Mastercard} alt="mastercard-logo" />
              <img src={Paypal} alt="paypal-logo" />
            </div>
          </div>

          <div className="social-medias">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <hr />
        <p>© 2023 NOTHING | All rights reserved</p>
      </div>
    </footer>
  );
}
