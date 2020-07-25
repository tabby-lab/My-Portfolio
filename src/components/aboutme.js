import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="container">


                <div className="container">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1>Tabby Garcia</h1>
                        </div>



                    </div>
                </div>


                <div className="container blob">
                    <div className="circle"></div>
                    <img className="img-circle" src="assets1/myPic.jpg" />
                    <h3 className="aboutMe">About Me</h3>
                    <p className="bio"><h6>Full Stack Web Developer with a background in Science and certificate holder in Full Stack Web Development from the University of Texas. Passionate about creating visually enriched web applications and delivering user-centric experiences. Collaborative team player recognized for complex problem solving abilities and strong work ethic. With a background in extensive science research, personable background in customer service, and passion for web development, collaborating with others to create meaningful web applications would be a vision fulfilled.</h6>

                    </p>

                </div>











               

             

                
                        <div className="container-fluid tech">
                       
                            <div className="row">

                            <i className="fab fa-html5 tech"></i>
                       

                       <i className="fab fa-bootstrap tech"></i>
                            


                       

                       
                            <i className="fab fa-css3-alt tech"></i>
                            

                     

                      
                            <i className="fab fa-react tech"></i>
                            
                     

                            <i className="fab fa-node tech"></i>
                          


                     
                            <i className="fab fa-js tech"></i>




                           
                           
                        


                       
                            
                            
                        </div>
                        </div>
           
                </div>
        


                

              
                


               

       


                    



           

        

        )
    }
}

export default About;