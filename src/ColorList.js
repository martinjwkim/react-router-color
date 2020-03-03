import React from 'react';
import { Link } from 'react-router-dom';


function ColorList({colors}){
  const colorLinks = (
    colors.map(color => (
    <li key={color.name}><Link to={`/colors/${color.name}`}>{color.name}</Link></li>
    ))
  )
  return (
    <ul>
      {colorLinks}
    </ul>
  )
}

export default ColorList;
