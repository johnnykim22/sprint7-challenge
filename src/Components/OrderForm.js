import React from "react";
import { useState } from "react";

export default function OrderForm() {
  const [size, setSize] = useState("");
  const [sauce, setSauce] = useState("");
  const [toppings, setToppings] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [glutenFree, setGlutenFree] = useState(false);

  const handleToppingsChange = (e) => {
    if (e.target.checked) {
      setToppings([...toppings, e.target.value]);
    } else {
      setToppings(toppings.filter((topping) => topping !== e.target.value));
    }
  };

  const handleSauce = (e) => {
    if (e.target.checked) {
      setSauce([...sauce, e.target.value]);
    } else {
      setSauce(sauce.filter((sauce) => sauce !== e.target.value));
    }
  };

  return (
    <form>
      <div>
        <label>Choice of Size</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="XL">XL</option>
        </select>
      </div>

      <div>
        <label>Choice of Sauce</label>

        <div>
          <input
            type="radio"
            name="sauce"
            value="Original Red"
            onChange={(e) => setSauce(e.target.value)}
            checked={sauce === "Original Red"}
          />
          Original Red
          <div>
            <input
              type="radio"
              name="sauce"
              value="Garlic Ranch"
              onChange={(e) => setSauce(e.target.value)}
              checked={sauce === "Garlic Ranch"}
            />
            Garlic Ranch
          </div>
          <div>
            <input
              type="radio"
              name="sauce"
              value="Bbq Sauce"
              onChange={(e) => setSauce(e.target.value)}
              checked={sauce === "Bbq Sauce"}
            />
            Bbq Sauce
          </div>
          <div>
            <input
              type="radio"
              name="sauce"
              value="Spinach Alfredo"
              onChange={(e) => setSauce(e.target.value)}
              checked={sauce === "Spinach Alfredo"}
            />
            Spinach Alfredo
          </div>
        </div>
      </div>

      <div>
        <label>Add Toppings</label>
        <input
          type="checkbox"
          value="Pepperoni"
          onChange={handleToppingsChange}
        />{" "}
        Pepperoni
        <input
          type="checkbox"
          value="Sausage"
          onChange={handleToppingsChange}
        />{" "}
        Sausage
        <input
          type="checkbox"
          value="Canadian Bacon"
          onChange={handleToppingsChange}
        />{" "}
        Canadian Bacon
        <input
          type="checkbox"
          value="Spicy Italian Sausage"
          onChange={handleToppingsChange}
        />{" "}
        Spicy Italian Sausage
        <input
          type="checkbox"
          value="Grilled Chicken"
          onChange={handleToppingsChange}
        />{" "}
        Grilled Chicken
        <input
          type="checkbox"
          value="Onions"
          onChange={handleToppingsChange}
        />{" "}
        Onions
        <input
          type="checkbox"
          value="Green Pepper"
          onChange={handleToppingsChange}
        />{" "}
        Green Pepper
        <input
          type="checkbox"
          value="Diced Tomatoes"
          onChange={handleToppingsChange}
        />{" "}
        Diced Tomatoes
        <input
          type="checkbox"
          value="Black Olives"
          onChange={handleToppingsChange}
        />{" "}
        Black Olives
        <input
          type="checkbox"
          value="Roasted Garlic"
          onChange={handleToppingsChange}
        />{" "}
        Roasted Garlic
        <input
          type="checkbox"
          value="Artichoke Hearts"
          onChange={handleToppingsChange}
        />{" "}
        Artichoke Hearts
        <input
          type="checkbox"
          value="Three Cheese"
          onChange={handleToppingsChange}
        />{" "}
        Three Cheese
        <input
          type="checkbox"
          value="Pineapple"
          onChange={handleToppingsChange}
        />{" "}
        Pineapple
        <input
          type="checkbox"
          value="Extra Cheese"
          onChange={handleToppingsChange}
        />{" "}
        Extra Cheese
      </div>

      <div>
        <label>Choice of Substitute</label>
        <input
          type="checkbox"
          checked={glutenFree}
          onChange={() => setGlutenFree(!glutenFree)}
        />{" "}
        Gluten Free Crust
      </div>

      <div>
        <label>Special Instructions</label>
        <textarea
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
        ></textarea>
        <div>
          <label htmlFor="name-input">Name:</label>
          <input
            type="text"
            id="name-input"
            name="name"
            placeholder="Enter your name"
          />
        </div>
      </div>

      <button
        className="btn"
        onClick={() => (window.location.href = "/success")}
      >
        Add to Order
      </button>
    </form>
  );
}
