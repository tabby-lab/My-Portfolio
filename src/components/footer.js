import React from 'react';


function index() {
  return (
    <div className='footer-dark' style={{ padding: "0vh" }}>
      <footer>
        <div className='container'>
          <p>Tabby Garcia</p>
          <div className='col'>
            <ul>
              <li style={{borderRight: 'solid thin grey'}}>
                <a href='./'>Home</a>
              </li>
              <li style={{borderRight: 'solid thin grey'}}>
                <a href='./about'>About</a>
              </li>
              <li>
                <a href='./Contact'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              
              <li>
              Email: tabby.garcia1@gmail.com
              </li>
              
            </ul>
          </div>
          <div className="col">
              <h6>2020 All rights reserved to be badass</h6>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default index;

{/* <div className="container-fluid padding">
<div className="row text-center">
    <div className="col-12">
        <h5 id="contact">Contact</h5>

        <h6>Phone: (713-518-8821)</h6>
        <h6>Email: tabby.garcia1@gmail.com</h6>
        <h6>Austin,TX 78745</h6>
    </div>
</div>
</div>
</div> */}