import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";


const schema = Yup.object().shape({
  name: Yup.string().min(2, "name must be at least 2 characters"),
});

const initialFormValues = {
  name: "",
  size: "",
  hasPepperoni: false,
  hasMushroom: false,
  hasOnion: false,
  hasPineapple: false,
  specialText: "",
};

const initialErrorValues = {
  name: "",
};



export default function OrderForm() {
  const [size, setSize] = useState("");
  const [sauce, setSauce] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [glutenFree, setGlutenFree] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrorValues);

  const onFormChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormValues({
        ...formValues,
        [e.target.name]: !formValues[e.target.name],
      });
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    if (e.target.name === "name") {
      Yup.reach(schema, e.target.name)
        .validate(e.target.value)
        .then(() => setErrors({ ...errors, [e.target.name]: "" }))
        .catch((err) =>
          setErrors({ ...errors, [e.target.name]: err.errors[0] })
        );
    }
    console.log(errors);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("https://reqres.in/api/orders", formValues)
      .then((res) => console.log(res));
  };

  return (
    <form id="pizza-form" onSubmit={onFormSubmit}>
      <div>
        <label >Choice of Size</label>
        <select id="size-dropdown" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
         
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
        <input type="checkbox" value="Pepperoni" onChange={onFormChange} />{" "}
        Pepperoni
        <input type="checkbox" value="Sausage" onChange={onFormChange} />{" "}
        Sausage
        <input
          type="checkbox"
          value="Canadian Bacon"
          onChange={onFormChange}
        />{" "}
        Canadian Bacon
        <input
          type="checkbox"
          value="Spicy Italian Sausage"
          onChange={onFormChange}
        />{" "}
        Spicy Italian Sausage
        <input
          type="checkbox"
          value="Grilled Chicken"
          onChange={onFormChange}
        />{" "}
        Grilled Chicken
        <input type="checkbox" value="Onions" onChange={onFormChange} /> Onions
        <input
          type="checkbox"
          value="Green Pepper"
          onChange={onFormChange}
        />{" "}
        Green Pepper
        <input
          type="checkbox"
          value="Diced Tomatoes"
          onChange={onFormChange}
        />{" "}
        Diced Tomatoes
        <input
          type="checkbox"
          value="Black Olives"
          onChange={onFormChange}
        />{" "}
        Black Olives
        <input
          type="checkbox"
          value="Roasted Garlic"
          onChange={onFormChange}
        />{" "}
        Roasted Garlic
        <input
          type="checkbox"
          value="Artichoke Hearts"
          onChange={onFormChange}
        />{" "}
        Artichoke Hearts
        <input
          type="checkbox"
          value="Three Cheese"
          onChange={onFormChange}
        />{" "}
        Three Cheese
        <input type="checkbox" value="Pineapple" onChange={onFormChange} />{" "}
        Pineapple
        <input
          type="checkbox"
          value="Extra Cheese"
          onChange={onFormChange}
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
      <input name="specialText" id="special-text" value={formValues.specialText} onChange={onFormChange} />
        <label  name='specialText' id="special-text">Special Instructions</label>
        <textarea
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
        ></textarea>
        <div>
          <label>Name:</label>
          <input 
            id='name-input'
            type="text"
            onChange={onFormChange}
            name="name"
            value={formValues.name}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
      </div>

      <button id="order-button" className="btn" disabled={!!errors.name}>
        Submit Order
      </button>
    </form>
  );
}
