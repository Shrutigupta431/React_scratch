import React from "react";
import ReactDOM from "react-dom";
import RestaurantCart from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //local state variable
   const [lisdtOfRestaurants, setListOfRestaurants ] = useState(resList);


  //Normal Js variable
  // let lisdtOfRestaurantsJS = [
  //   {
  //     info: {
  //       id: "78526",
  //       name: "Daawat 24*7 - Hotel Tilak",
  //       cloudinaryImageId: "c10jq9uwcicxa9lcdk2t",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["North Indian", "Thalis", "Biryani", "Chinese", "Snacks"],
  //       avgRating: 4.5,
  //       deliveryTime: 43,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "78326",
  //       name: "KFC",
  //       cloudinaryImageId: "c10jq9uwcicxa9lcdk2t",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["North Indian", "Thalis", "Biryani", "Chinese", "Snacks"],
  //       avgRating: 3.8,
  //       deliveryTime: 45,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "7837826",
  //       name: "Dominos",
  //       cloudinaryImageId: "c10jq9uwcicxa9lcdk2t",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["North Indian", "Thalis", "Biryani", "Chinese", "Snacks"],
  //       avgRating: 4.2,
  //       deliveryTime: 4.2,
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            const filteredList = lisdtOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(lisdtOfRestaurants);
            setListOfRestaurants(filteredList)
          }}
        >
          {" "}
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {/* //don't use index as a key instead use unique id */}
        {lisdtOfRestaurants.map((restaurant, index) => (
          <RestaurantCart key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestaurantCart resData={resObj[1]} />
          <RestaurantCart resData={resObj[2]} />
          <RestaurantCart resData={resObj[3]} />
          <RestaurantCart resData={resObj[4]} />
  
          <RestaurantCart resData={resObj[5]} /> */}
        {/* <RestaurantCart resName = "KFC" cuisine="Burger , Fries, Cold Coffee" /> */}
      </div>
    </div>
  );
};

export default Body;
