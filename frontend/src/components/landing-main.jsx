import React from "react";
import "./../assets/css/components/landing.scss";
import ShopNowImg from "./../assets/images/cards/shop-now.jpg";
import OurStoryImg from "./../assets/images/cards/story.jpg";
import WinterImg from "./../assets/images/cards/winter.jpg";

const LandingMain = () => {
  return (
    <div className="main-landing">
      <div className="landing-img"></div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 landing-card">
            <a href="" className="landing-card-link">
              <h1 className="display landing-card-link-title">Shop Now</h1>
              <img
                src={ShopNowImg}
                alt=""
                className="landing-card-img img-fluid"
              />
              <div className="white-bg"></div>
            </a>
          </div>
          <div className="col-md-4 landing-card">
            <a href="" className="landing-card-link">
              <h1 className="display landing-card-link-title">Our Story</h1>
              <img
                src={OurStoryImg}
                alt=""
                className="landing-card-img img-fluid"
              />
              <div className="white-bg"></div>
            </a>
          </div>
          <div className="col-md-4 landing-card">
            <a href="" className="landing-card-link">
              <h1 className="display landing-card-link-title">
                Winter Collection
              </h1>
              <img
                src={WinterImg}
                alt=""
                className="landing-card-img img-fluid"
              />
              <div className="white-bg"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMain;
