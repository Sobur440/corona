import './Main.css'
import { Link } from 'react-router-dom'
import CoroCountries from './CoroCountries'
import { useState } from 'react'

//Cimages import 

import uglyGirl from '../images/ugly_black_girl.png'
import arrow from '../images/arrow.png'
import corona from '../images/corona.png'
import  symptoms from '../images/symptoms.png'
import nurse from '../images/nurse.png'

const Main = () => {
    
    //states
    
    const [index, setIndex] = useState(0)
    const [countries, setCountries] = useState([
        {
            name: "Nigeria",
            img: require("../images/nigeria.png"),
            cases: "192K"
        },
        {
            name: "UK",
            img: require("../images/uk.png"),
            cases: "192K"
        },
        {
            name: "USA",
            img: require("../images/america.png"),
            cases: "192K"
        },
        {
            name: "China",
            img: require("../images/china.png"),
            cases: "192K"
        },
        {
            name: "Nigeria",
            img: require("../images/nigeria.png"),
            cases: "192K"
        },
        {
            name: "UK",
            img: require("../images/uk.png"),
            cases: "192K"
        },
        {
            name: "US",
            img: require("../images/america.png"),
            cases: "192K"
        },
        {
            name: "China",
            img: require("../images/china.png"),
            cases: "192K"
        },
        {
            name: "UK",
            img: require("../images/uk.png"),
            cases: "192K"
        },
        {
            name: "US",
            img: require("../images/america.png"),
            cases: "192K"
        },
        {
            name: "China",
            img: require("../images/china.png"),
            cases: "192K"
        },
        {
            name: "UK",
            img: require("../images/uk.png"),
            cases: "192K"
        },
        {
            name: "US",
            img: require("../images/america.png"),
            cases: "192K"
        },
        {
            name: "China",
            img: require("../images/china.png"),
            cases: "192K"
        },
        {
            name: "UK",
            img: require("../images/uk.png"),
            cases: "192K"
        },
        {
            name: "US",
            img: require("../images/america.png"),
            cases: "192K"
        },
        {
            name: "China",
            img: require("../images/china.png"),
            cases: "192K"
        },
        {
            name: "UK",
            img: require("../images/uk.png"),
            cases: "192K"
        },
        {
            name: "US",
            img: require("../images/america.png"),
            cases: "192K"
        }
    ])

    
    
    const translate = [0, 25, 50, 75]
    let move = { transform: `translateX(-${translate[index]}%)` }
    let color = {color: "#c4c4c4", fontFamily: "lato"}
    const isMinus = /"-"/g
    
    
    // Function

    const handleNext = () => {
        setIndex(prev => prev + 1)
        if(index === translate.length - 1) {
            setIndex(translate.length - 1)
        }
    }

    const handlePrev = () => {
        setIndex(prev => prev - 1)
        if(isMinus && index < 1) {
            setIndex(0)
          }
    }

    return(
        <div className='main-container'>


                              {/* HERO START */}

                               
            <div className="hero-container">
                <div className="warning">
                    <div className="self-test">
                        <button className="covid-self-test">COVID-19 SELF TEST</button>
                    </div>
                    <div className="stay-home">
                        Stay Home <br />
                        Stay Safe
                       <p className="global-cases">
                       Covid-19 Global Cases by the Center <br />
                       for Systems Science and Engineering (CSSE)
                       </p>
                    </div>
                    <div className="check-symptoms-btn-container">
                        <button className="check-symptoms">CHECK SYMPTOMS</button>
                    </div>
                    <div className="total-world-cases-container">
                    <div className="cases-amount">10, 861, 146+</div>
                    <div style={color} >World total cases</div>
                </div>
                </div>
                    <div className="ugly-girl-container">
                        <img src={uglyGirl} alt="UGLY-GIRL" className='ugly-girl-img' />
                <div className="status-check-container">
                <Link to="#" className="status-check">Check life status</Link>
                </div>
                </div>
            </div>
                           <br /><br /><br />
                           {/* HERO END */}

                           {/* ANOTHER-SECTION START */}

            <div className='corona-countries-container'>
                <div className="countries" style={move}>
                    {countries.map((country, index) => (
                        <CoroCountries key={index} country={country} />
                    ))}
                </div>
            </div>

            <div className="arrows-container">
                <div className="first-arrow-container" onClick={handlePrev} >
                    <img src={arrow} alt="first arrow" className="first-arrow" />
                </div>
                <div className="second-arrow-container"  onClick={handleNext} >
                    <img src={arrow} alt="first arrow" className="second-arrow" />
                </div>
            </div>

            <br /> <br /> <br /> <br />

                        {/* ABOUT CORONA */}

            <div className="about-corona-container">
                <div className="about-corona">
                    <div className="corona-img-container">
                        <img src={corona} alt="Corona image" className="corona-img" />
                    </div>
                    <div className="meet-corona">
                        <p className="what-is-corona">
                            What is Corona Virus <br />
                            (Covid-19)?
                        </p>
                        <p className="answer">
                            Coronavirus diseases (COVID-19) is an <br />
                            infectious disease caused by the <br />
                            SARS-COV-2 virus consectetur from lii <br />
                            adipscing elit, sed do elusmod tempori <br />
                            incididunt ut labore et dolore magna bu <br />
                            aliqua. Ut enim ad minim veniam, quisio <br />
                            nostrud exercitation ullamco laboris nisi <br />
                            ut aliquip ex ea commodo consequatto.
                        </p>
                        <div className="check-symptoms-btn-container">
                        <button className="check-symptoms">CHECK SYMPTOMS</button>
                        </div>
                    </div>
                </div>
            </div>

                                {/* ABOUT CORONA END */}
                                <br /> <br /> <br /> <br />

                                 {/* HOW CORONA SPREAD */}
            <div className="how-corona-spread">
                <div className="how-novel-spread-corona-container">
                    <div className="how-novel-spread-corona-head">
                        How does Novel <br />
                        Corona Virus Spread?
                    </div>
                    <p className="how-it-spread">
                       Current evidence suggests that the <br />
                        virus spreads mainly between people <br />
                        who are in close contact with each <br />
                        other, typically within 1 metre <br />
                        (short-range). A person can be infected <br />
                        when aerosols or droplets containing <br />
                        the virus are inhaled or come directly <br />
                        into contact with the eyes, nose, or <br />
                        mouth.
                    </p>
                    <div className="check-symptoms-btn-container">
                        <button className="check-symptoms">CHECK SYMPTOMS</button>
                    </div>

                </div>
                <div className="ways">
                <div className="first-way">
                    <div className="air-transmission way">
                        <p className="air-transmission-head way-head">Air Transmission</p>
                        <p className="air-transmission-body way-body">
                            via respiratory droplet <br />
                            produced when an infected <br />
                            person coughs or sneezes.
                        </p>
                    </div>
                    <div className="animal-contact way">
                        <p className="animal-contact-head  way-head">Animal Contact</p>
                        <p className="animal-contact-body way-body">
                            Stay home if you begin to <br />
                            feel unwell even with milki <br />
                            nose symptoms.
                        </p>
                    </div>
                </div>
                <div className="second-way">
                    <div className="personal-contact way">
                        <p className="personal-contact-head  way-head">
                            Personal Contact
                        </p>
                        <p className="personal-contact-body way-body">
                            Avoid contact with others <br />
                            to avoid getting infected with <br />
                            the disease.
                        </p>
                    </div>
                    <div className="surfaces-and-object way">
                        <p className="surfaces-and-object-head  way-head">
                            Surfaces and Object
                        </p>
                        <p className="surfaces-and-object-body way-body">
                            Most of the droplet falls <br />
                            nearby surfaces and objects <br />
                            such as desk, table, phone <br />
                            etc.
                        </p>
                    </div>
                </div>
                </div>
            </div>


                          {/* HOW CORONA SPREAD END */}
                           
                               <br /><br /><br /><br />

                              {/* SYMPTOMS START */}

            <div className="symptoms-container">
                <div className="symptoms-head-container">
                    <p className="symptoms-head">SYMPTOMS OF COVID-19</p>
                    <p className="symptoms-sub-head">
                       The virus can cause a range of symptoms,<br />
                       ranging from mild illiness to pneumona
                    </p>
                </div>
                <div className="symptoms-img-container">
                    <img src={symptoms} alt="" className="symptoms-img" />
                </div>
            </div>

                               {/* SYMPTOMS END */}

                               <br /><br /><br />

                               {/* HOW TO PROTECT YOURSELF START */}

            <div className="protect-yourself-container">
                <p className="protect-yourself-head">
                    HOW TO PROTECT YOURSELF
                </p>
                <p className="how-to-protect-yourself-body">
                    Protect yourself and others around you by knowing <br />
                    the facts and taking appropiate protection.
                </p>

                <div className="ways-of-protecting-yourself">
                    <div className="part-1">
                        <div className="surface-cleaning protection">
                            <div className="surface-cleaning-head protection-head">Disinfect Surfaces Often</div>
                            <div className="surface-cleaning-body protection-body">
                               Lorem ipsum dolor sit amet <br />
                               consectetur adipisicing elit.<br />
                               Maxime mollitia, molestiae 
                            </div>
                        </div>
                        <div className="staying-home protection">
                            <div className="staying-home-head protection-head">Stay Home</div>
                            <div className="staying-home-body protection-body">
                                Lorem ipsum dolor sit amet <br />
                               consectetur adipisicing elit.<br />
                               Maxime mollitia, molestiae <br />
                           </div>
                        </div>
                        <div className="wearing-mask protection">
                            <div className="wearing-mask-head protection-head">Wear Mask</div>
                            <div className="wearing-mask-body protection-body">
                               Lorem ipsum dolor sit amet <br />
                               consectetur adipisicing elit.<br />
                               Maxime mollitia, molestiae <br />
                            </div>
                        </div>
                    </div>
                    <div className="part-2">
                        <div className="hand-washing protection">
                            <div className="hand-wasing-head protection-head">Wash Hands Often</div>
                            <div className="hand-wasing-body protection-body">
                               Lorem ipsum dolor sit amet <br />
                               consectetur adipisicing elit.<br />
                               Maxime mollitia, molestiae <br />
                            </div>
                        </div>
                        <div className="nose-and-mouth-covering protection">
                            <div className="nose-and-mouth-covering-head protection-head">Cover your Nose and Mouth</div>
                            <div className="nose-and-mouth-covering-body protection-body">
                               Lorem ipsum dolor sit amet <br />
                               consectetur adipisicing elit.<br />
                               Maxime mollitia, molestiae <br />
                            </div>
                        </div>
                        <div className="social-distancing protection">
                            <div className="social-distancing-head protection-head">Maintaing Social Distance</div>
                            <div className="social-distancing-body protection-body">
                               Lorem ipsum dolor sit amet <br />
                               consectetur adipisicing elit.<br />
                               Maxime mollitia, molestiae <br />
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
                                            {/* HOW TO PROTECT YOURSELF START */}
                                                   <br /><br />

            <div className="here-to-help-container">
                <div className="here-to-help-image-container">
                    <img src={nurse} alt="NURSE" className="here-to-help-img" />
                </div>
                <div className="another-here-to-help">
                    <p className="helping-with-covid">We are here to help you with Covid-19</p>
                    <p className="covid-global-cases">
                      Covid-19 Global Cases by the Center <br />
                      for Systems Science and Engineering (CSSE)
                    </p>
                    <div className="here-to-help-btns">
                        <Link className='another-check-symptoms'>CHECK SYMPTOMS</Link>
                        <Link className="find-health-center">FIND HEALTH CENTER</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Main