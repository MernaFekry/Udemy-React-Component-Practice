import React , { Component } from "react";


class Card extends Component{


    render(props) {
        return (

            
            <div>

                <div className="pythonCourses">


                    <div className="courseInfo">

                        <div className="courseImg">
                            <img src={this.props.img} alt="Course Image" />
                        </div> 
        

                    <div className="courseTextInfo">
        
                            <h3>{this.props.title}</h3>
                            <h5 className="mutedColor">{this.props.instructor}</h5>
                            <div className="courseReview">
                                <span className="ratingNumber">{this.props.stars}</span>
                                {/* <div className="ratingstars">
                                    <i className="fa-solid fa-star fa-2xs"></i>
                                    <i className="fa-solid fa-star fa-2xs"></i>
                                    <i className="fa-solid fa-star fa-2xs"></i>
                                    <i className="fa-solid fa-star fa-2xs"></i>
                                    <i className="fa-solid fa-star-half-stroke fa-2xs"></i>
                                </div> */}
                                {/* <span className="raingVotes mutedColor">(3,507)</span> */}
                            </div>
                            <div className="coursePrice">
                                <p className="currentPrice">{this.props.price}</p>
                            </div>
        
                        </div>
                    </div>


                </div>

            </div>

            
        );
    }
}

export default Card


