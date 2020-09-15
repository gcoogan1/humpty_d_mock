import React, { useState } from "react";
import Meal from './Meal/Meal';
import './index.css'
import bowls from '../../MealsData/bowlData';

function Dumplings() {
    const [bowlMeal, setBowlMeal] = useState({ bowls });
   // console.log(bowls.map(item => (item.meal)))
    return (
        <div className="dumplings_display">
            {bowlMeal.bowls.map(item => (
                <Meal
                  key={item.meal}
                  meal={item.meal}
                  image={item.image}
                  vegan={item.vegan}
                  star={item.star}
                  info={item.info}
                />
              ))}
        </div>
    )
}

export default Dumplings;