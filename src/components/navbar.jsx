import { useEffect } from "react";
import navlogo from "../assets/navlogo.png";
import { mycontext } from "./context";
import { useContext } from "react";


export default function Nav() {

const {showmenu, hidemenu, toggleMenuOn, toggleMenuOff} = useContext(mycontext)












  
  return (
    <>
      <div className="nav-container-outer">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={navlogo} alt="" />
          </div>
          <div className="nav-links">
            <a href="">About</a>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Testimonials</a>
            <a href="">help</a>
          </div>
          <div className="nav-buttons">
            <a href="" className="sign-in">
              Sing In
            </a>

            <a href="#" className="sign-up" id="sign-up">
              Sign Up
            </a>
          </div>
          
            <i class="fa-solid fa-bars" ref={showmenu} onClick={toggleMenuOn}></i>
            <i class="fa-solid fa-xmark" ref={hidemenu} onClick={toggleMenuOff}></i>
        
        </div>
      </div>
    </>
  );
}
