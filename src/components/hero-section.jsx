import { useEffect } from 'react';
import heroImg from '../assets/heroimg.png'


export default function Hero() {

    

    useEffect(() => {
        const buttonElement = document.getElementById("hero-btn");
 buttonElement.addEventListener("animationstart", () => {
   // Add the 'started-animation' class when the animation starts
   buttonElement.classList.add("animate-visible");
 });

    }, [])











    return (
      <>
        <div className="hero-section">
          <div className="hero-section-text">
            <h1 className="animate__animated animate__bounceInLeft">
              Want anything to be easy with <span>LaslesVPN</span>.
            </h1>
            <p
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <a
              href="#"
              className="animate__animated animate__jello"
              style={{ animationDelay: "0.9s", opacity: "0" }}
              id="hero-btn"
            >
              Get Started
            </a>
          </div>
          <div className="hero-section-img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </>
    );
}

