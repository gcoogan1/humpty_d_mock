import React, { useState } from "react";
import Vegan from '../../../assets/Vegan.svg';
import "./Meal.css";

const Meal = ({ image, info, meal, vegan, star }) => {
  const [isShown, setIsShown] = useState(false);



  



 

  return (
    <>
     
      <div className="meal_card">
   
      <span className="arrow_box">{info}</span>
    
        <img
          src={image}
          alt=""
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
        <p>{meal}</p>

        <div className="meal_card_bottom">
          <img src={vegan} alt="" />
           <img src={star} alt="" />
        </div>
      </div>
    </>
  );
};

export default Meal;
