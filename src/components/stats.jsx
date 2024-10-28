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
  const userint = setInterval(() => {
    if (userval.current < 90) {
      setUsers((prevUsers) => prevUsers + 1); // Use function to access previous state
      userval.current += 1; // Update ref directly
    } else {
      clearInterval(userint);
    }
  }, 70);

  // Clear interval on component unmount
  


  const locationint = setInterval(() => {
    if (locationval.current < 30) {
      setLocations((pevLocations) => pevLocations + 1); // Use function to access previous state
      locationval.current += 1; // Update ref directly
    } else {
      clearInterval(locationint);
    }
  }, 100);



  const serverint = setInterval(() => {
    if (serverval.current < 50) {
      setServers((prevServers) => prevServers + 1); // Use function to access previous state
      serverval.current += 1; // Update ref directly
    } else {
      clearInterval(serverint);
    }
  }, 100);

}, []);

  return (
    <>
      <div className="stats-section">
        <div className="users">
          <div className="user-img-head">
            <img src={userImg} alt="" />
          </div>
          <div className="user-text">
            <h2>{users}k+</h2>
            <p>Users</p>
          </div>
        </div>
        <div className="locations">
          <div className="locations-img">
            <img src={locationImg} alt="" />
          </div>
          <div className="locations-text">
            <h2>{locations}+</h2>
            <p>Locations</p>
          </div>
        </div>
        <div className="servers">
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
