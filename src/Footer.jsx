import React from "react";
// import ReactDom from "react-dom";

function Footer(){
    const currrentyear = new Date().getFullYear();
    
    return (
        <footer>
      
    <p>copyright {currrentyear}</p>
   </footer>
    );
}
export default Footer ;