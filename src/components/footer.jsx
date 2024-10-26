import logofooter from '../assets/navlogo.png'
import facebook from '../assets/Facebook.png'
import twwiter from '../assets/Twitter.png'
import insta from '../assets/Instagram.png'
import Subscribe from './subscribe'





export default function Footer() {
  return (
    <>
      <div className="footer-outer">
        <Subscribe></Subscribe>
        <div className="footer">
          <div className="about-company">
            <img src={logofooter} alt="" />
            <p>
              LaslesVPN is a private virtual network that <br></br> has unique features
              and has high security.
            </p>
            <div className="social-img">
              <img src={facebook} alt="" />
              <img src={twwiter} alt="" />
              <img src={insta} alt="" />
            </div>
            <p className='copyright'>©2020LaslesVPN</p>
          </div>
          <div className="product">
            <h4>Product</h4>
            <a href="#">Download</a>
            <a href="#">Pricing</a>
            <a href="#">Locations</a>
            <a href="#">Server</a>
            <a href="#">Countries</a>
            <a href="#">Blog</a>
          </div>
          <div className="engage">
            <h4>Engage</h4>
            <a href="#">LaselVpn</a>
            <a href="#">Faq</a>
            <a href="#">Tutorials</a>
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms oF Service</a>
          </div>
          <div className="earn">
            <h4>Earn Money</h4>
            <a href="#">Affiliate</a>
            <a href="#">Become Partner</a>
          </div>
        </div>
      </div>
    </>
  );
}
