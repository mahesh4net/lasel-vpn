import freeImg from "../assets/Free.png";
import stdImg from "../assets/Standard.png";
import preImg from "../assets/Premium.png";

export default function Pricingcards() {
  return (
    <>
      <div className="freecard">
        <div className="free-card-content">
          <img src={freeImg} alt="" />
          <h4>Free Plan</h4>
          <p>Unlimited Bandwitch</p>
          <p>Encrypted Connection</p>
          <p>No Traffic Logs</p>
          <p>Works on All Devices</p>
        </div>

        <div className="free-card-btn">
          <h3>Free</h3>
          <a href="">Select</a>
        </div>
      </div>

      <div className="standardcard">
        <div className="standard-card-content">
          <img src={stdImg} alt="" />
          <h4>Standard plan</h4>
          <p>Unlimited Bandwitch</p>
          <p>Encrypted Connection</p>
          <p>Yes Traffic Logs</p>
          <p>Works on All Devices</p>
          <p>Connect Anyware</p>
        </div>

        <div className="standard-card-btn">
          <h3>
            $9 <span id="card-span">/ month</span>
          </h3>
          <a href="">Select</a>
        </div>
      </div>

      <div className="premiumcard">
        <div className="premium-card-content">
          <img src={preImg} alt="" />
          <h4>Premium Plan</h4>
          <p>Unlimited Bandwitch</p>
          <p>Encrypted Connection</p>
          <p>Yes Traffic Logs</p>
          <p>Works on All Devices</p>
          <p>Connect Anyware</p>
          <p>Get New Features</p>
        </div>

        <div className="premium-card-btn">
          <h3>
            $12 <span id="card-span">/ month</span>
          </h3>
          <a href="">Select</a>
        </div>
      </div>
    </>
  );
}
