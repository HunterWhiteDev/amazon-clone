import React, { useRef } from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { useHistory } from "react-router-dom";
import Rating from "../Rating/Rating";

export interface ProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  slug?: string;
}

function Product({ id, title, image, price, rating, slug }: ProductProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const history = useHistory();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== buttonRef.current) history.push(`/product/${slug}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <Rating rating={rating} />
        </div>
      </div>

      <div className="product__footer">
        <img src={image} alt="" />
        <button ref={buttonRef} onClick={addToBasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
