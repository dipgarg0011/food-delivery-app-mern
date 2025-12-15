import { useContext } from "react";
import { Storecontext } from "../../context/Storecontext";
import Fooditem from "../Fooditem/Fooditem";

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(Storecontext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list
          .filter(
            (item) => category === "All" || item.category === category
          )
          .map((item) => (
            <Fooditem
              key={item._id}
              _id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Fooddisplay;
