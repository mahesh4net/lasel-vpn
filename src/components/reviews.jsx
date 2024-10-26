import user1 from "../assets/user1.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
    var settings = {
      dots: true,
      className: "center",
     
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
    };

    return (
      <>
        <div className="review-section">
          <h2>
            Trusted by Thousands of <br></br>Happy Customer
          </h2>
          <p className="imp-p">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
          <Slider {...settings} id="slider">
            <div className="review-box">
              <div className="user-details">
                <div className="user-profile">
                  <div className="user-img">
                    <img src={user1} alt="" />
                  </div>
                  <div className="user-name">
                    <h4>Viezh Robert</h4>
                    <p>Warsaw, Poland</p>
                  </div>
                </div>
                <div className="user-stars">
                  <h6>4.5</h6>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <p>
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN is always the best.”
              </p>
            </div>

            <div className="review-box">
              <div className="user-details">
                <div className="user-profile">
                  <div className="user-img">
                    <img src={user1} alt="" />
                  </div>
                  <div className="user-name">
                    <h4>Viezh Robert</h4>
                    <p>Warsaw, Poland</p>
                  </div>
                </div>
                <div className="user-stars">
                  <h6>4.5</h6>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <p>
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN is always the best.”
              </p>
            </div>
            <div className="review-box">
              <div className="user-details">
                <div className="user-profile">
                  <div className="user-img">
                    <img src={user1} alt="" />
                  </div>
                  <div className="user-name">
                    <h4>Viezh Robert</h4>
                    <p>Warsaw, Poland</p>
                  </div>
                </div>
                <div className="user-stars">
                  <h6>4.5</h6>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <p>
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN is always the best.”
              </p>
            </div>
          </Slider>
        </div>
      </>
    );
}
