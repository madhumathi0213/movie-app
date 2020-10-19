import React from 'react';
import './Grid.css';
// import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';

const Grid = ({ header, children }) => (
  <div className="div">
    <h1>{header}</h1>
    <div className="content">{children}</div>
  </div>
  
)

export default Grid;