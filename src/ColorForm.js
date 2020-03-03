import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function ColorForm({ addColor }) {

  const history = useHistory()
  const INITIAL_STATE = { name: '', color: "#ff0000" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    try{
      addColor(formData)
      setFormData(INITIAL_STATE);
      history.push("/colors")
    } catch {
      alert("Color already exists")
      setFormData(INITIAL_STATE);
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="name"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="color">Color: </label>
      <input
        type="color"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
        <button to="/">Add Color</button>
    </form>
    </div>
  );
}

export default ColorForm;