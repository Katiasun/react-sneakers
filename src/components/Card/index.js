import React from "react";
import cardStyles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.favorite} onClick={props.onClickPlus}>
        <img src="/img/heart-white.svg" alt="white-heart" />
      </div>

      <img width={133} height={112} src={props.imgUrl} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button>
          <img
            className={cardStyles.plus}
            onClick={onClickPlus}
            src={isAdded ? "/img/chaked.svg" : "/img/plus.svg"}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
