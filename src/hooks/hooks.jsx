
import { useState } from "react";
import "./hoosk.css";
import { IoIosArrowDown } from "react-icons/io";

export default function FunkApp() {

//   const [isLoading, setIsLoading] = useState(false);

//   const toggleIsLoading = () => {

//     setIsLoading(current => !current);
//   };

const [inSide,outSide] = useState(false);
const toggleInSide = () => {
    outSide(current => !current);
}
  return (
    <div className="Sups">
      <button className="btnS" onClick={toggleInSide}><p>Why park a domain name in Parkname ?</p><IoIosArrowDown className={inSide ? "icon2" : "icon1"}/></button>
       <p className={inSide ? "us" : "none"}>
        Park is the leading industry standard for domain name parking and monetization servicies .We offer a wide variety of sefvices to help you achive succses
       </p> 
    </div>
  );
}
