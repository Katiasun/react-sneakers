import React from "react";
import cardStyles from "./Card.module.scss";

function Card({ title, imageUrl, price, Favorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClikPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.favorite} onClick={onPlus}>
        <img src="/img/heart-white.svg" alt="white-heart" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button>
          <img
            className={cardStyles.plus}
            onClick={onPlus}
            src={isAdded ? "/img/chaked.svg" : "/img/plus.svg"}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
