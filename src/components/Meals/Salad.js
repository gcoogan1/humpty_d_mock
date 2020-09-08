import React, { useState } from "react";
import Meal from './Meal/Meal';
import './index.css'
import salad from '../../MealsData/saladData';

function Salads() {
    const [saladMeal, setDumplingsMeal] = useState({ salad });
   
    return (
        <div className="dumplings_display">
            {saladMeal.salad.map(item => (
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

export default Salads;