import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

interface I_Pizza {
  imageUrl: string;
  title: string;
  price: number;
}

export function FullPizza() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<I_Pizza>();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63b5f5401907f863aaea0d89.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        navigate("/");
      }
    }
    fetchPizza();
  }, []);
  if (!pizza) {
    return (
      <>
        <p>"Завантаження..."</p>
      </>
    );
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₴</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
}
