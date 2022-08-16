import React from 'react'
import './Overlay.css'

const Overlay = () => {
    return (
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={process.env.PUBLIC_URL + "assets/image/happy1.jpg"} className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + "assets/image/Happy_lady.jpg"} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                </div>
            </div>
            <div className="overlay-type overlay position--left position--vcenter">
                <div className="inner">
                        <div className="overlay__content"><div className="feature-subheader">
                            Treat Yourself or a Loved One
                        </div>
                        <div className="overlay__content">
                            <h2 className="line-1 ">
                                The UK's Favourite <br />
                                Book Subscription
                            </h2>
                            <div className="rte line-2 large-text">
                                <p><em>The book subscription box that makes a difference.</em></p>
                            </div>
                            <div className="line-3">
                                <span className="button hover-grow"><a href='#'> Subscribe or gift</a></span>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Overlay