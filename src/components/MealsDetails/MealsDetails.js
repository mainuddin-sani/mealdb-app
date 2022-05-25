import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealsDetails = () => {
    const {mealsId} = useParams();
    const [meals, setDetails] = useState([]);
    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`)
        .then(data=>setDetails(data.data.meals))
    },[])
    return (
        <div>
            <h1>Meals Details{mealsId}</h1>

            {
                meals.map(details=>{
                    return(
                        <div>
                            <img src={details.strMealThumb} alt="" />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MealsDetails;