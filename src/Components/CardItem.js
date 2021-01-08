import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <a className="cards__item__link" href={props.path}>
          <figure className="cards__item__pic-wrap" data-title={props.title}>
            <video
              src={props.src}
              className="cards__item__img"
              autoPlay
              loop
              muted
            />
          </figure>
          <div className="cards__item__info">
            <span className="cards__item__text">{props.text}</span>
            <span className="cards__item__label__wrap">
              {props.label &&
                props.label.map((item, index) => {
                  return (
                    <span key={index} className="cards__item__label">
                      {item}
                    </span>
                  );
                })}
            </span>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
