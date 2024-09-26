import React from 'react';
import './css/menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
      <div className="menu">
          <nav>
              <ul>
                  <h1>Liceu</h1>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/registry">Matrícula</Link></li>
              </ul>
          </nav>
      </div>
    );
  }
  
  export default Menu;