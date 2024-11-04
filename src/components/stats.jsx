import userImg from "../assets/user.png";
import locationImg from "../assets/location.png";
import ServerImg from "../assets/Server.png";
import { useRef, useState, useEffect } from "react";

export default function Stats() {
  const [users, setUsers] = useState(0);
  const userval = useRef(0);
  const [locations, setLocations] = useState(0);
  const locationval = useRef(0);
  const [servers, setServers] = useState(0);
  const serverval = useRef(0);

  useEffect(() => {
    const h1Element = document.querySelectorAll(".stats-section .users");

    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const userint = setInterval(() => {
              if (userval.current < 90) {
                setUsers((prevUsers) => prevUsers + 1); // Use function to access previous state
                userval.current += 1; // Update ref directly
              } else {
                clearInterval(userint);
              }
            }, 50);

           

           

            // Optional: Unobserve the element after it has been animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger when 10% of the element is visible

    // Observe the h1 element
    h1Element.forEach((element) => {
      observer.observe(element);
    });
  }, []);


  useEffect(() => {
    const h1Element = document.querySelectorAll(".stats-section .locations");

    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
           
            // Clear interval on component unmount

            const locationint = setInterval(() => {
              if (locationval.current < 30) {
                setLocations((pevLocations) => pevLocations + 1); // Use function to access previous state
                locationval.current += 1; // Update ref directly
              } else {
                clearInterval(locationint);
              }
            }, 70);

          

            // Optional: Unobserve the element after it has been animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger when 10% of the element is visible

    // Observe the h1 element
    h1Element.forEach((element) => {
      observer.observe(element);
    });
  }, []);



  useEffect(() => {
    const h1Element = document.querySelectorAll(".stats-section .servers");

    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
           

            const serverint = setInterval(() => {
              if (serverval.current < 50) {
                setServers((prevServers) => prevServers + 1); // Use function to access previous state
                serverval.current += 1; // Update ref directly
              } else {
                clearInterval(serverint);
              }
            }, 70);

            // Optional: Unobserve the element after it has been animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger when 10% of the element is visible

    // Observe the h1 element
    h1Element.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <>
      <div className="stats-section">
        <div className="users animated-no">
          <div className="user-img-head">
            <img src={userImg} alt="" />
          </div>
          <div className="user-text">
            <h2>{users}k+</h2>
            <p>Users</p>
          </div>
        </div>
        <div className="locations animated-no">
          <div className="locations-img">
            <img src={locationImg} alt="" />
          </div>
          <div className="locations-text">
            <h2>{locations}+</h2>
            <p>Locations</p>
          </div>
        </div>
        <div className="servers animated-no">
          <div className="servers-img">
            <img src={ServerImg} alt="" />
          </div>
          <div className="servers-text">
            <h2>{servers}+</h2>
            <p>Servers</p>
          </div>
        </div>
      </div>
    </>
  );
}
