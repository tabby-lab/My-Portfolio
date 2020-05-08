import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container">


                <div className="container">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1>Tabbitha Garcia</h1>
                        </div>



                    </div>
                </div>


                <div className="container blob">
                    <div className="circle"></div>
                    <img className="img-circle" src="assets1/myPic.jpg" />
                    <h3 className="aboutMe">About Me</h3>
                    <p className="bio">Currently attending coding boot camp at UT Austin to pursue my
                    dream to become a full stack web developer. I am a hardworking, self-motivated, enthusiastic
                    web
                    developer with a deep interest and passion in creating visually and enriched web
                    experiences. As
                    this area compliments my studies, I am motivated to gain more experience and excel in this
                    field.
                       </p>

                </div>








                <div className="container col-12 social padding text-center">
                    <div className="row"></div>
                    <h3 id="connect">Connect</h3>
                    <a href="https://github.com/tabby-lab"><i className="fab fa-github"></i></a>
                    <a href="https://www.facebook.com/tabbitha.garcia?ref=bookmarks"><i
                        className="fab fa-facebook icon-2x"></i></a>
                    <a href="https://www.instagram.com/cry_baby1991/"><i className="fab fa-instagram icon-2x"></i></a>
                    <a href="https://www.linkedin.com/in/tabbitha-garcia-01164a144/"><i
                        className="fab fa-linkedin icon-2x"></i></a>
                    <a href="Tabby Garcia Resume1.PDF" download>
                        <i className="fas fa-file-pdf"></i>
                    </a>
                </div>



                <div className="container padding">
                    <div className="row welcome text-center">


                        <h3 id="projects">Projects</h3>



                    </div>
                </div>



                <div className="container-fluid padding">
                    <div className="row padding">
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="./assets1/project.png" />
                                <div className="card-body">

                                    <a href="https://tabby-lab.github.io/project1/" className="btn btn-outline-secondary">
                                        Forever Furry Friends </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="./assets1/work.png" />
                                <div className="card-body">

                                    <a href="https://tabby-lab.github.io/Work_Day_Scheduler/"
                                        className="btn btn-outline-secondary">
                                        Work Day Scheduler </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="./assets1/weather.png" />
                                <div className="card-body">
                                    <a href="https://tabby-lab.github.io/Weather_Dashboard/"
                                        className="btn btn-outline-secondary">
                                        Weather App</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>








                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">




                    <div className="container-fluid padding">
                        <div className="row welcome text-center">
                            <div className="col-12">

                                <h3 id="lang">I'm Bilingual!</h3>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="container-fluid padding">
                    <div className="row text-center padding">

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <i className="fas fa-code"></i>
                            <h6>HTML5</h6>

                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <i className="fas fa-bold"></i>
                            <h6>BOOTSTRAP</h6>


                        </div>

                        <div className="col-xs-12 col-md-4">
                            <i className="fab fa-css3"></i>
                            <h6>CSS3</h6>

                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <i className="fab fa-node"></i>
                            <h6>Node</h6>


                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <i className="fab fa-js"></i>
                            <h6>JAVASCRIPT</h6>
                        </div>


                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <img src="https://img.icons8.com/metro/26/000000/sql.png" />
                            <h6>SQL</h6>
                        </div>





                    </div>







                    <div className="container-fluid padding">
                        <div className="row text-center">
                            <div className="col-12">
                                <h5 id="contact">Contact</h5>

                                <h6>Phone: (713-518-8821)</h6>
                                <h6>Email: tabby.garcia1@gmail.com</h6>
                                <h6>Austin,TX 78745</h6>
                            </div>
                        </div>
                    </div>
                </div>



                <footer>

                </footer>
            </div>










        )
    }
}

export default About;