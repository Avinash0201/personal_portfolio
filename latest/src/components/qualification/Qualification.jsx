import { useState } from "react";
import "./qualification.css"
const  Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index)
    }
  return (
    <section className="qualification section " id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey
        </span>
         <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                className={toggleState === 1 ? 
                    "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap
                     qualification__icon"></i>{" "}
                    Education
                </div>

                <div   
                 className={toggleState === 2 ? 
                    "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                    Experience
                </div>
            </div>

            <div className="qualification__section ">
                <div 
                className={toggleState === 1 ? 
                    "qualification__content qualification__content-active" 
                    : "qualification__content "
                    }>
                    <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">B.Tech in Information Technology</h3>
                            <span className="qualification__subtitle">M.G.M's J.N.E.C, Aurangabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>Aug/2019- July/2023
                            </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                    </div>


                    <div className="qualification__data">
        
                        <div></div>
                        
                        <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                         </div>

                    <div>
                        <h3 className="qualification__title">HSC</h3>
                            <span className="qualification__subtitle">
                                Kulbhushan junior college,Aurangabad
                                </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>Mar/2017- Mar/2019
                            </div>
                            </div>
                    </div>


                    <div className="qualification__data">  
                    <div>
                        <h3 className="qualification__title">SSC</h3>
                            <span className="qualification__subtitle">Podar International School C.B.S.E</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>Mar-2017
                            </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                    </div>


                </div>
            </div>



                <div  className={toggleState === 2 ? 
                    "qualification__content qualification__content-active" 
                    : "qualification__content "
                    }>
                    <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Full stack web development intern</h3>
                            <span className="qualification__subtitle"> Devtown pvt ltd</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>Jun/2022- Nov/2022
                            </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                    </div>


                    <div className="qualification__data">
        
                        <div></div>
                        
                        <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                         </div>

                    <div>
                        <h3 className="qualification__title">Web developer Intern</h3>
                            <span className="qualification__subtitle">Webtouter pvt ltd
                                
                                </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>Feb/2023-May/2023
                            </div>
                            </div>
                    </div>


                    <div className="qualification__data">  
                    <div>
                        <h3 className="qualification__title">Front-End intern</h3>
                            <span className="qualification__subtitle">Karvi Engineering & Consultancy, Gujrat</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>Feb/2022- March/2022
                            </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                    </div>


                </div>
            </div>


    
    </section>
  )
}

export default Qualification;
