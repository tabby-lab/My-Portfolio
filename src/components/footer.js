import React from 'react';



const Footer = () => {
  return (
    <div className='footer-dark' style={{ padding: "0vh" }}>

      <div className='container'>
        <p>Tabby Garcia</p>
        <div className='col'>
          <div className="container-fluid padding social">
            <div className="row padding link">

              <a href="https://github.com/tabby-lab"><i className="fab fa-github"></i></a>


              <a href="https://www.linkedin.com/in/tabbitha-garcia-01164a144/"><i
                className="fab fa-linkedin icon-2x"></i></a>

            </div>


            <ul>
              <li style={{ borderRight: 'solid thin grey' }}>
                <a href='./'>Home</a>
              </li>
              <li style={{ borderRight: 'solid thin grey' }}>
                <a href='./about'>About</a>
              </li>
              <li>
                <a href='./Contact'>Contact</a>
              </li>
            </ul>
          
          <div className='col'>
            <ul>

              <li>
                Email: tabby.garcia1@gmail.com
              </li>

            </ul>
          </div>

        </div>

      </div>
    </div>
    </div>
  );
}

export default Footer;

