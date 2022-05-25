import axios from "axios";
import React, { useEffect, useState } from "react";
import MealsCard from "../MealsCard/MealsCard";
import "./home.css";
const Home = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [massage, setMassage] = useState('');
  

  // dataload
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((data) => setMeals(data.data.meals));
  }, [search]);
  const SearchMelas = (e) => {
    setSearch(e.target.value);
};
  return (
    <div className="home">
      <div className="searchbar">
        <h1>Meals App</h1>
        <input
          type="text"
          onChange={SearchMelas}
          className="search"
          placeholder="Search Meals .."
        />
      </div>

      {/* <h1>Meals Found {meals.length}</h1> */}
      {massage}
      <div className="melasCard">
        {meals.map((item) => (
          <MealsCard key={item.idMeal} meals={item}></MealsCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
