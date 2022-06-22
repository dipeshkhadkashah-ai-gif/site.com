import React from 'react'; //importing react from react
import GalleryHeader from '../../images/H9.jpg'; //importing images for gallery
import './gallery.css'; //for style in gallery
import Img1 from '../../images/1.jpg';
import Img2 from '../../images/2.jpg';
import Img3 from '../../images/3.jpg';
import Img4 from '../../images/4.jpg';
import Img5 from '../../images/5.jpg'
import Img6 from '../../images/6.jpg';

const Gallery = () => { //creating a function 
    return(
        <>
        <div id="gallery">
        {/* <div className="about">
            <div className="img">
                <img src={GalleryHeader} alt="" />
            </div>
            <div className="overlay">

            </div>
        </div> */}
        {/* Gallery main start */}
        <div className="gallery_main container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="box">
                        <img src={Img1} className="img-fluid" alt="" />
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="box">
                        <img src={Img2} className="img-fluid" alt="" />
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="box">
                        <img src={Img3} className="img-fluid" alt="" />
                    </div>
                </div>

                {/*Image for the second row*/}

                <div className="col-sm-4">
                    <div className="box">
                        <img src={Img4} className="img-fluid" alt="" />
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="box">
                        <img src={Img5} className="img-fluid" alt="" />
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="box">
                        <img src={Img6} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Gallery;