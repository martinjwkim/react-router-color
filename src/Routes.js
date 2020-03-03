import React, {useState} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import ColorList from "./ColorList"
import Color from "./Color"
import ColorForm from "./ColorForm"
import { v4 as uuid } from 'uuid';


function Routes() {

  const [colors, setColors] = useState([{name: 'red', color: 'red'},{name: 'blue', color: 'blue'},{name: 'green', color: 'green'}])


  const addColor = color => {
    if (colors.some(existingColor=> existingColor.name===color.name)){
      throw new Error()
    }
    let newColor = { ...color, id: uuid() };
    setColors(colors => [newColor, ...colors])
  };

  return (
    <div>
      <Switch>
        <Route exact path="/colors"><ColorList colors={colors}/></Route>
        <Route exact path="/colors/new"><ColorForm addColor={addColor}/></Route>
        <Route exact path="/colors/:name"><Color colors={colors}/></Route>
        <Redirect to="/colors"/>
      </Switch>
    </div>
  );
}

export default Routes;
