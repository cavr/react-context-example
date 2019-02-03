import React from "react";
import { NavLink } from 'react-router-dom';
import "./App.css";

export default () => {
  return (
    <div className="App">
      <NavLink to="/context">Context</NavLink>
    </div>
  )
}
