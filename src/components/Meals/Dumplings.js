import React, { useState } from "react";
import Meal from './Meal/Meal';
import './index.css'
import dumplings from '../../MealsData/dumplingData';

function Dumplings() {
    const [dumplingMeal, setDumplingsMeal] = useState({ dumplings });
    console.log(dumplings.map(item => (item.meal)))
    return (
        <div className="dumplings_display">
            {dumplingMeal.dumplings.map(item => (
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
