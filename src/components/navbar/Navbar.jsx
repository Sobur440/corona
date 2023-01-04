import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {



    //States

    const [hamburger, setHamburger] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [hamburgerList, setHamburgerList] = useState(false)
    const [backDrop, setBackDrop] = useState(false)



   //Functions
    
    window.addEventListener("scroll", () => {
        let scrolled = window.scrollY
        if (scrolled >= 60) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    })

    const handleHamburger = () => {
        setHamburger(!hamburger)
        setHamburgerList(!hamburgerList)
        setBackDrop(!backDrop)
        
    }

    const removeHamburgerMenu = () => {
        setHamburger(false)
        setHamburgerList(false)
        setBackDrop(false)
    }

    // if (hamburger) {
    //      setBackDrop(
    //         {
    //             ...backDrop,
    //             display: "block"
    //         }
    //     )
    // } else {
    //      setBackDrop(
    //         {
    //             ...backDrop,
    //             display: "none"
    //         }
    //     )
    // }
    




    return(
        <div className='nav-container'>
            <nav className={`nav ${shadow ? "nav-bg" : ""}`}>
                <div className="logo">Covid 19</div>

                <ul className={`navigators ${hamburgerList ? "active" : ""}`} >
                    <li><Link to='/' className='home-navigator navigator' onClick={removeHamburgerMenu} >Home</Link></li>
                    <li><Link to='/' className='about-navigator navigator' onClick={removeHamburgerMenu} >About</Link></li>
                    <li><Link to='/' className='symptoms-navigator navigator' onClick={removeHamburgerMenu} >Symptoms</Link></li>
                    <li><Link to='/' className='guidelines-navigator navigator' onClick={removeHamburgerMenu} >Guidelines</Link></li>

                    <div className="sec-btns-container">
                      <div className="btns2">
                          <Link to='#' className='sec-btn sec-login-btn'>Log in</Link>
                          <Link  to='#' className='sec-btn sec-signup-btn'>Sign up</Link>
                      </div>
                   </div>
                </ul>

                    <div className="btns">
                        <Link to='#' className='btn login-btn'>Log in</Link>
                        <Link  to='#' className='btn signup-btn'>Sign up</Link>
                    </div>

                <div className={`hamburger ${hamburger ? "active" : ""}`} onClick={handleHamburger} >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className={`backdrop ${backDrop ? "active" : ""}`} onClick={removeHamburgerMenu} ></div>
            </nav>
        </div>
    )
}
export default Navbar

