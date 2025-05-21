import {useState, useEffect} from 'react'; //import useState and useEffect from react
import {fetchProfilePic} from '../../utils/request.js'; //import fetchImage from request.js
import './Home.css'; //import the css file for the home page

const Home = () => {
      const [profilePic, setProfilePic] = useState(''); //state for profile picture
      const [isLoading, setLoading] = useState(true); //state for loading
      const [error,setError] = useState(null); //state for error

      //fetch the profile picture from the api
        useEffect(() => {
            const getProfilePic = async () => {
                try {
                    setLoading(true); //set loading to true so it can start loading
                    const url = await fetchProfilePic(); //fetch the image from the api
                    setProfilePic(url); //set the logo to the url
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
            getProfilePic(); //call the function to get the profile picture
        }, []); //empty array means it only runs once
      
        return (
            <>
                <div className="home-container">
                    <div className="Home-details">
                        <h1 className="name">I AM <span className="name-highlight">JACOB MOLOMO</span></h1>
                        <p className="description">ASPIRING SOFTWARE ENGINEER |  DATA SCIENTIST 
                            <br/>
                        </p>
                        <p className="description2">BSc in Mathematical Sciences in Applied Maths & Computer Science</p>
                        <button className="talk">
                            About Me
                        </button>

                        <h1 className="notice">Please Note this web is still in production</h1>
                    </div>
                    <div className="profile">
                        {isLoading ? ( //if loading is true, show loading
                            <p>Loading...</p>
                        ) : error ? ( //if there is an error, show the error
                            <p>{error}</p>
                        ) : ( //if there is no error, show the image
                            <img src={profilePic} alt="Profile" className="profile-pic" />
                        )}
                    </div>
                </div>
            </>
        );


};


export default Home; //export the component so it can be used in other files