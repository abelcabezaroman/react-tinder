import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./SwingGallery.scss";

export default function SwingGallery({ data,onSwipe }) {

    const [isOpened, setIsOpened] = useState(null);
    const openDescription = () => {
        console.log("e")
        setIsOpened(true)
    }
  return (
    <div className={"c-swing-gallery" + (isOpened ? " c-swing-gallery--opened": "")}>
      {data.map((item, index) => (
        <TinderCard
          key={index}
          className={"c-swing-gallery__item" }
          key={index}
          onSwipe={onSwipe}
        >
          <img draggable="false" className="c-swing-gallery__img" src={item.image} alt="" />
          <h2 onClick={() => openDescription(index)} className="c-swing-gallery__text">{item.name}</h2>

          {isOpened &&<p >{item.description}</p>}
          {isOpened &&<button className="b-btn" onClick={() => setIsOpened(null)}>X</button>}
        </TinderCard>
      ))}
    </div>
  );
}
