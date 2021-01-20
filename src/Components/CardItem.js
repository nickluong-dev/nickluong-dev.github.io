import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cardsItem">
        <a className="cardsItemLink" href={props.path}>
          <figure className="cardsItemPicWrap" data-title={props.title}>
            <video
              src={props.src}
              className="cardsItemImg"
              autoPlay
              loop
              muted
              type="video/mp4"
            />
          </figure>
          <div className="cardsItemInfo">
            <span className="cardsItemText">{props.text}</span>
            <span className="cardsItemLabelWrap">
              {props.label &&
                props.label.map((item, index) => {
                  return (
                    <span key={index} className="cardsItemLabel">
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
