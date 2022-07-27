import React, { useState } from "react";
import "./hookMe.css";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

export default function Apply() {
  const [startState,endState]= useState(false);
  const toggleENdState = () => {
    endState(current => !current);
  }
    const [minState,maxState]= useState(false);
  const toggleMaxState = () => {
    maxState(current => !current);}
    const [minState1,maxState1]= useState(false);
    const toggleMaxState1 = () => {
      maxState1(current => !current);}
      const [minState2,maxState2]= useState(false);
      const toggleMaxState2 = () => {
        maxState2(current => !current);}
        const [minState3,maxState3]= useState(false);
        const toggleMaxState3 = () => {
          maxState3(current => !current);
}
    return (
      <div className="alistar">
      <div className="Pro" onClick={toggleENdState}>
      <div className="btn-gray" >
          <CgProfile className="user-icon"/>
          <div className="will">
          <h2 className="title">About Us</h2>
          <span className="span">4 articles on this topic</span>
          </div>
          </div>
          <IoIosArrowDown className={startState ? "icon-arrow" : "icon-arrow2"}/>
          </div>
        <div className={startState ? "sub-card" : "none"}>
          <div className="component-card"onClick={toggleMaxState}>
            <div className="btn-gray-2" ><p> How does Parkname seperate itself from other domain name parking companies? </p><IoIosArrowDown className={minState ? "icon-arrow2" : "icon-arrow1"}/></div>
           
            <p className={minState ? "dub-card" : "none"}>Your domains are a valuable online property.
              As in any investments, you want the most efficient, easy way to make sure your property is going to be profitable.
              Do you own more than 1000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.
            </p>
          </div>
         
          <div className="component-card"onClick={toggleMaxState1}>
            <div className="btn-gray-2" ><p> Is Parkname Parking actually free?</p><IoIosArrowDown className={minState1 ? "icon-arrow2" : "icon-arrow1"}/></div>
           
            <p className={minState1 ? "dub-card" : "none"}>Your domains are a valuable online property.
              As in any investments, you want the most efficient, easy way to make sure your property is going to be profitable.
              Do you own more than 1000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.
            </p>
          </div>
          
          <div className="component-card"onClick={toggleMaxState2}>
            <div className="btn-gray-2" ><p> What you do? </p><IoIosArrowDown className={minState2 ? "icon-arrow2" : "icon-arrow1"}/></div>
           
            <p className={minState2 ? "dub-card" : "none"}>Your domains are a valuable online property.
              As in any investments, you want the most efficient, easy way to make sure your property is going to be profitable.
              Do you own more than 1000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.
            </p>
          </div>
         
          <div className="component-card"onClick={toggleMaxState3}>
            <div className="btn-gray-2" ><p> When was Parkname first founded? </p><IoIosArrowDown className={minState3 ? "icon-arrow2" : "icon-arrow1"}/></div>
           
            <p className={minState3 ? "dub-card" : "none"}>Your domains are a valuable online property.
              As in any investments, you want the most efficient, easy way to make sure your property is going to be profitable.
              Do you own more than 1000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.
            </p>
          </div>
        </div>
      </div>
    )
    }