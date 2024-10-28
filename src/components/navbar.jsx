import { useEffect } from "react";
import navlogo from "../assets/navlogo.png";
import Mobilenav from "./mobilenav";

export default function Nav() {
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
        </div>

             
      </div>
    </>
  );
}
