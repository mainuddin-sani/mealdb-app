import React from 'react';
import './cardMeals.css'
const MealsCard = (props) => {
    const {idMeal, strMeal, strMealThumb, strInstructions} = props.meals;
    const mealsDetailsBtn = ()=>{
        console.log('clicked')
    }
    return (
        <div className='card-items'>
            <img src={strMealThumb} alt="" />
            <div className="content">
                <h4>{strMeal}</h4>
                <p>{idMeal}</p>
                <p><small>{strInstructions.slice(0,50)}...</small></p>
                <button onClick={mealsDetailsBtn}>Details</button>
            </div>
        </div>
    );
};

export default MealsCard;