import userImg from "../assets/user.png";
import locationImg from "../assets/location.png";
import ServerImg from "../assets/Server.png";

export default function Stats() {
  return (
    <>
      <div className="stats-section">
        <div className="users">
          <div className="user-img-head">
            <img src={userImg} alt="" />
          </div>
          <div className="user-text">
            <h2>90+</h2>
            <p>Users</p>
          </div>
        </div>
        <div className="locations">
          <div className="locations-img">
            <img src={locationImg} alt="" />
          </div>
          <div className="locations-text">
            <h2>30+</h2>
            <p>Locations</p>
          </div>
        </div>
        <div className="servers">
          <div className="servers-img">
            <img src={ServerImg} alt="" />
          </div>
          <div className="servers-text">
            <h2>50+</h2>
            <p>Servers</p>
          </div>
        </div>
      </div>
    </>
  );
}
