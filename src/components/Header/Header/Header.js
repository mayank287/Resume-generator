import React from 'react';
import "./Header.css";
import Resume from "../../../Assets/Resume.svg"

const Header = () => {
    return (
        <div className="container">
            <div className="left">

                <p className="heading">
                    A <span>Resume</span> That Stands Out!

                </p>
                <p className="heading">
                    Make Your own Resume <span>It's Free</span>


                </p>





            </div>
            <div className="right">
                <img src={Resume} alt="resume" />
            </div>
        </div>
    )
}

export default Header