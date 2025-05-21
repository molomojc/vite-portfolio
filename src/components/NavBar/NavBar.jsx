import { useState, useEffect } from "react"; //for the state 
import {fetchImage} from "../../utils/request.js"; //fet ch the image
import './NavBar.css';
import {fetchLogoText} from '../../utils/request.js'; //fetch the logo text

const NavBar = () => {
    const [logo, setLogo] = useState(''); //state for logo
    const [isLoading, setLoading] = useState(true); //state for loading
    const [error,setError] = useState(null); //state for error
    const [LogoText, setLogoText] = useState(''); //state for logo text
    //useEffect only runs once when the component mounts
    useEffect(() =>
    {
        const getLogo = async () => {
            try {
                setLoading(true); //set loading to true so it can start loading
                const url = await fetchImage(); //fetch the image from the api
                setLogo(url); //set the logo to the url
                setError(null); //set error to null
            }catch(error)
            {
                setError('Failed to load this Image'); //set error to the error
                console.error("Error fetching logo:", error); //log the error
            }
            finally
            {
                setLoading(false); //set loading to false so it can stop loading
            }
        };

        const getLogoText = async () => {
            try {
                setLoading(true); //set loading to true so it can start loading
                const url = await fetchLogoText(); //fetch the image from the api
                setLogoText(url); //set the logo to the url
                setError(null); //set error to null
            }catch(error)
            {
                setError('Failed to load this Image'); //set error to the error
                console.error("Error fetching logo:", error); //log the error
            }
            finally
            {
                setLoading(false); //set loading to false so it can stop loading
            }
        };
        getLogoText(); //call the function to get the logo text
        getLogo(); //call the function to get the logo
    }, []); //empty array means it only runs once
    
   

    return (
      <nav className="navBar">
        <div className="navbar-containiner">
           {/*input logo*/}
           <div className="navbar-logo">
             {logo && <img src={logo} alt="Logo" className="logo" />} {/*if logo is not null, then show the logo*/}
           </div>
              {/*input logo text*/}
              <div className="navbar-logo-text">
                {LogoText && <img src={LogoText} alt="Logo Text" className="logo-text" />} {/*if logo text is not null, then show the logo text*/}
              </div>

        
              <div className="navbar-list">
                 {/*input the list of items*/}
                <ul className="nav-list">
                <li className="nav-item">
                    <a href="#home">Home</a>
                </li> {/*link to home*/}
                <li className="nav-item">
                    <a href="#about">Education</a>
                </li> {/*link to about*/}
                <li className="nav-item">
                    <a href="#services">Project</a>
                </li> {/*link to services*/}
                <li className="nav-item">
                    <a href="#contact">Contact</a>
                    </li> {/*link to contact*/}
                    <li className="nav-item">
                    <a href="#contact">GitHub</a>
                    </li> {/*link to contact*/}
                </ul>
              </div>

        </div>
        {/*error if there is an error*/}
        {error && <div className="error">{error}</div>} {/*if there is an error, show the error*/}
      </nav>
    )
    


};

export default NavBar; //export the component


