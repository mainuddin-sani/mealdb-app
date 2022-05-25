import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cardMeals.css'
const MealsCard = (props) => {
    const {idMeal, strMeal, strMealThumb, strInstructions} = props.meals;
    let navigate = useNavigate();
    const mealsDetailsBtn = (idMeal)=>{
        navigate(`home/${idMeal}`)
    }
    return (
        <div className='card-items'>
            <img src={strMealThumb} alt="" />
            <div className="content">
                <h4>{strMeal}</h4>
                <p>{idMeal}</p>
                <p><small>{strInstructions.slice(0,50)}...</small></p>
                <button onClick={()=>mealsDetailsBtn(idMeal)}>Details</button>
            </div>
        </div>
    );
};

export default MealsCard;