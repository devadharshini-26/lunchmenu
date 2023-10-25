import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import Datalist from "../pages/Datalist";
import Menulist from "../pages/Menulist";
const Foods = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [lunchMenu, setLunchMenu] = useState([]);
  const [issue, setIssue] = useState();
  const [feedback, setFeedback] = useState();
  const [visible, setVisible] = useState(true);

const handleName = (event) => {
setName(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleLunchMenu = (event) => {
    if(event.target.checked)
       (setLunchMenu([...lunchMenu ,event.target.value]))    
      else{
         const temp=lunchMenu.filter((item)=>item!==event.target.value)
         setLunchMenu(temp)
      }
  };
  
  const handleIssue = (event) => {
    setIssue(event.target.value);
  };
  const handleFeedback = (event) => {
    setFeedback(event.target.value);
  };

  return (
    <>
      <form>
        <div className="container">
          <div className="row">
            {visible && (
             <Datalist name={name} handleName={handleName} Price={price} handlePrice={handlePrice} 
             LunchMenu={lunchMenu} handleLunchMenu={handleLunchMenu} Issue={issue} handleIssue={handleIssue}
             feedback={feedback} handleFeedback={handleFeedback} setVisible={setVisible}/>

            )}
          <Menulist name={name} price={price}
          lunchMenu={lunchMenu} issue={issue}
          feedback={feedback} />
           
        
          </div>
        </div>
      </form>
    </>
  );
};
export default Foods;
