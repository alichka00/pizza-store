import cartEmptyImg from "assets/img/empty-cart.png";
import { Link } from "react-router-dom";

export const CartEmpty = () => (
  <div className="cart cart--empty">
    <h2>
      Кошик порожній <span>😕</span>
    </h2>
    <p>
      Ймовірно ви ще не замовили піцу.
      <br />
      Щоб замовити піцу, перейдіть на головну сторінку.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Повернутися назад</span>
    </Link>
  </div>
);
