import { useContext } from "react";
import { mycontext } from "./context";


export default function Mobilenav() {

  const { mobilemenubox, mobilemenu} = useContext(mycontext);

    return (
      <>
        <div className="mobile-nav-container-outer" ref={mobilemenubox}>
          <div className="mobile-nav-container" ref={mobilemenu}>
            <div className="mobile-nav-links">
              <a href="">About</a>
              <hr />
              <a href="">Features</a>
              <hr />
              <a href="">Pricing</a>
              <hr />
              <a href="">Testimonials</a>
              <hr />
              <a href="">help</a>
              <hr />
            </div>
            <div className="mobile-nav-buttons">
              <a href="" className="mobile-sign-in">
                Sing In
              </a>
              <a href="#" className="mobile-sign-up" id="mobile-sign-up">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </>
    );



}