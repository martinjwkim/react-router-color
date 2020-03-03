import React from 'react';
import {useParams, Redirect } from 'react-router-dom'

function Color({colors}){
  const {name} = useParams();


  if (colors.every(color=> color.name!==name)){
    return <Redirect to="/colors"/>
  }

  const color = colors.find(color => color.name===name)

  return (
    <div style={{background: color.color}}>
      <h1>This is {name}</h1>
    </div>
  );
}

export default Color;