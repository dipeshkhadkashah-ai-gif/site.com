import React from "react"; //importing react from react
import H1 from "../../images/H1.jpg"; //importing home page image 1 from images
//import Custom from '../../images/H2.jpg'; //custumization images on home-page
import "./home.css"; //importing home css for managing division
//import video from "../../video/video.mp4"; //importing videos in home page

const Home = () => {
  //creating a function for home
  return (
    <>
    <div id="home">
    <div className="header">
        {/* <video autoplay loop muted>
          <source src={video.mp4} type="video/mp4" />
        </video> */}
        <div className="img">
          <img src={H1} alt="" />
        </div>
        <div className="overlay"></div>
        <div className="content">
          <h6>Enjoy the View</h6>
          <button className="btn">Explore</button>
        </div>
      </div>
      {/* Custom Section of Home-Page */}
      {/* <div className="custom container">
            <div className="row">
                <div className="col-sm-4">
                </div>
                <div class="float-left">
                <div className="col-sm-4">
                        <img src={Custom} className='img-fluid' alt="" />
                </div>
                <div className="col-sm-4">
                    <div>
                        <h6>Enjoying the Far-West Nepal</h6>
                        <p>Dolaka</p>
                    </div>
                </div>
                </div>
            </div>
        </div> */}
    </div>
    </>
  );
};

export default Home;
