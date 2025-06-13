// src/pages/FamilyTree.js
import React from 'react';
import './FamilyTree.css';

const FamilyTree = () => {
  return (
    <div className="tree-container">
      <h2 className="tree-title">Family Origin</h2>
      <div className="parent hover-effect">Madhunamma & Ram</div>
      <div className="children">
        <div className="child hover-effect">Laxmi</div>
        <div className="child hover-effect">Sarojana</div>
        <div className="child hover-effect">Pushavva</div>
        <div className="child hover-effect">KanakaMahalaxmi</div>
        <div className="child hover-effect">Bathkavva</div>
        <div className="child hover-effect">Vasantha</div>
      </div>
    </div>
  );
};

export default FamilyTree;
