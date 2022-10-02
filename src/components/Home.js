import React from "react";
import "./Home.css";
import logo from "./images/log.png";
import plus from "./images/plus1.png";
import work from "./images/default.png";
function Home() {
    return (
        <div className="wrapper">
            <div className="sidebar">
                {/* <h2>Namaste, User!</h2> */}
                <img src={logo} className="image-logo" alt="image"></img>
                <ul>
                    <li>
                        <a href="#" id="one">Agriculture</a>
                    </li>
                    <li>
                        <a href="#">Crime</a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-home"></i>Education
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-home"></i>Employement
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-home"></i>Health and Sanitation
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-home"></i>Purush
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-home"></i>Naari
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-home"></i>Theft
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-home"></i>Water
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-home"></i>Others
                        </a>
                    </li>
                </ul>

                {/* <div className="social-media">
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div> */}
            </div>

            <div className="main-content">

                <div className="header">
                    {/* Horizontal Nav Bar */}
                    <h2>DASHBOARD</h2>
                    {/*Search function for the nav bar*/}
                    {/* const [searchTerm, setSearchTerm] = useState('')
                    return(
                            <div className="App">
                            <input
                                type="text"
                                placeholder="Search"
                                onChange={event => {set SearchTerm{event.target.value}}
                                />
                        
                            {JSQNDATA.filter((val) => {
                                if (searchTerm == "")
                                    return val
                                else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }

                            }).map((val, key) => {
                                return (
                                    <div className="user" key={key}>
                                        <p>{val.first_name} </p>
                                    </div>
                                );	
	                        )};
                        );
                    </div> */}

                    {/* <div class="nav"> */}
                    {/* 
                        <div class="search">
                            <input type="text" placeholder="Search..">
                                <button type="submit"><img src="search.png" alt=""></button>
                        </div>
                        <div class="user">
                            <a href="#" class="btn">Add New</a>
                            <img src="notifications.png" alt="">
                                <div class="img-case">
                                    <img src="user.png" alt="">
                                </div>
                        </div> */}
                    {/* </div> */}
                    <div class="search">
                        <input type="text" placeholder="Search" className="input-search" />
                        <button type="submit" className="submit-btn">Enter</button>
                    </div>

                    <button className="logout-button">Logout</button>
                </div>

                <div className="info">
                    {/* Posts */}
                    {/* Row 1 */}

                    <img src={work} alt="imagg" className="imagg" id="imagg"></img>

                    <div className="row-card">

                        <div className="column-card">
                            <div className="card">
                                <img src={logo} alt="image1"></img>
                                {/* <h1>Agriculture Boost!!</h1> */}
                            </div>
                        </div>

                        <div className="column-card">
                            <div className="card">
                                <img src={logo} alt="image1"></img>
                            </div>
                        </div>

                        <div className="column-card">
                            <div className="card">
                                <img src={logo} alt="image1"></img>
                            </div>
                        </div>

                        <div className="column-card">
                            <div className="card">
                                <img src={logo} alt="image1"></img>
                            </div>
                        </div>

                    </div>

                    {/* Button */}
                    <div className="button">

                        <button className="rounded-button" type="button">
                            {/* <ion-icon name="share-social-sharp" size="large"></ion-icon> */}
                            <img src={plus} alt="im" className="im"></img>
                        </button>

                        <form id="contact" action="" method="post">
                            <img src={logo}>
                                <h3><b>SAMADHAAN CONTACT FORUM FORM</b></h3>
                                <h4>Contact us for custom quote</h4>
                                <fieldset>
                                    <input placeholder="Your name" type="text" tabindex="1" required autofocus>
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Email Address" type="email" tabindex="2" required>
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required>
                                </fieldset>
                                <fieldset>
                                    <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
                                </fieldset>
                                <fieldset>
                                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                </fieldset>
                                <p class="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
                        </form>

                    </div>

                    <div className="form-popup">
                        {/* <form  className="form-container"> */}
                        <h1>Select Your Domain</h1>
                        <p>How do you want to register your complain???</p>
                        <p>Do you want to make you identity public or private??</p>
                        <button type="submit" className="btn1">Public</button>
                        <button type="submit" className="btn2">Private</button>
                        {/* </form> */}
                    </div>

                </div>
                {/* Row 2 */}
                <div className="row-card">

                    <div className="column-card">
                        <div className="card">
                            <img src={logo} alt="image1"></img>

                        </div>
                    </div>

                    <div className="column-card">
                        <div className="card">
                            <img src={logo} alt="image1"></img>
                        </div>
                    </div>

                    <div className="column-card">
                        <div className="card">
                            <img src={logo} alt="image1"></img>
                        </div>
                    </div>

                </div>

            </div>

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>


        </div>

        {/* </div > */}


    );
}

export default Home;