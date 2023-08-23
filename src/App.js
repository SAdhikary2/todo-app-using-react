import { useState } from "react";
import "./App.css";
import ToDo from './ToDo'

function App() {
  const[inputList,setinputList]=useState('');
  const[item,setItem]=useState([]);

const Itemevents=(event)=>{
  setinputList(event.target.value);
};

const ListofItems=()=>{
  setItem((olditems)=>{
    return [...olditems,inputList]
  });
  setinputList("");
};


const deleteItems=(id)=>{
  console.log("The item has been deleted");
  setItem((olditems)=>{
    return olditems.filter((arrayElement,index)=>{
      return index !==id;
    })
  })
}



  return (
    
      <div className="main_section">
        <div className="center_div">
          <h1>TODOLIST</h1>
          <div className="button_section">
          <input type="text " placeholder="Add a items" value={inputList} onChange={Itemevents}/>
          <button type="submit"  onClick={ListofItems}>+</button>
          </div>
          <ol className="ol_class">
            {/* <li >{inputList}</li> */}
            { item.map((itemVal,index)=>{
              return  <ToDo  key={index} id={index} 
              onSelect={deleteItems}
              text={itemVal}/>
            })}
          </ol>
        </div>
      </div>
    
  );
}

export default App;
