import React from 'react';
import AdainNavBar from './nav';
// I imported the navbar and footer to set them as my app structure but with a prop to control where they should show in the app.
const Layouts = ({ children, showNavbar}) => {
  
   
  
  return (
    <div>

      {showNavbar && <AdainNavBar/>}
      {children}
     
    </div>
  );
};

export default Layouts;