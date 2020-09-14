import React, { useState } from "react";

import "./Meal.css";

const Meal = ({ image, info, meal, vegan, star }) => {
  const [isShown, setIsShown] = useState(false);



  

  let content;
  if (vegan === "v") {
    content = (
      <div className="vegan">
        <p>{vegan}</p>
      </div>
    );
  }

  return (
    <>
     
      <div className="meal_card">
   
      <span className="arrow_box">{info}</span>
    
        <img
          src={image}
          alt=""
          onClick={() => setIsShown(true)}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
        <p>{meal}</p>

        <div className="meal_card_bottom">
          {content}
          <img src={star} alt="" />
        </div>
      </div>
    </>
  );
};

export default Meal;
