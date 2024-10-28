import { useEffect } from "react";
import feaImg from "../assets/feaimg.png";

export default function Features() {
  useEffect(() => {
    const h1Element = document.querySelectorAll(
      ".features-text .animate__animated "
    );

    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              

         entry.target.addEventListener("animationstart", () => {
           // Add the 'started-animation' class when the animation starts
           entry.target.classList.add("animate-visible");
         });


            // Add the 'in-view' class when the element comes into view
            entry.target.classList.add("animate__lightSpeedInRight");
            

            // Optional: Unobserve the element after it has been animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    ); // Trigger when 10% of the element is visible

    // Observe the h1 element
    h1Element.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <>
      <div className="features-section">
        <div className="features-img">
          <img src={feaImg} alt="" />
        </div>
        <div className="features-text">
          <h2 class="animate__animated ">
            We Provide Many Features You Can Use
          </h2>
          <h6 class="animate__animated " style={{ animationDelay: "0s" }}>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </h6>

          <p class="animate__animated" style={{ animationDelay: "0.25s" }}>
            Powerfull online protection.
          </p>
          <p class="animate__animated " style={{ animationDelay: "0.3s" }}>
            Internet without borders.
          </p>
          <p class="animate__animated " style={{ animationDelay: "0.35s" }}>
            Supercharged VPN
          </p>
          <p class="animate__animated " style={{ animationDelay: "0.4s" }}>
            No specific time limits.
          </p>
        </div>
      </div>
    </>
  );
}
