import React from "react";
// import ReactDom from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import notes from "./Note";
import Entry from "./Entry";



function App(){
    return (
        <div>
        <Header/>
        <Footer></Footer>
  {/* <Note ></Note> */}
  <div  >
  {notes.map(x=>{
    return (
        <Entry
            key={x.key}
            title={x.title}
            content={x.content}

        />

        
    )
  })}

  </div>
        </div>
    );
}
export default App;