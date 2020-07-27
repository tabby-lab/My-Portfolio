import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';




const Projects = () => {



  return (
    
      <div className="container">
        <div className="row">
          <div className="col-sm project">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="../assets1/project1.png" />
              <Card.Body>
                <Card.Title>Jobless</Card.Title>
                <Card.Text>
                Full-stack application that helps users search for remote jobs in these hard times.
    </Card.Text>
    <Button>
    <a href="https://jobless2020.herokuapp.com/ " className="button">Click Here</a>
    </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm project">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="../assets1/project2.png" />
              <Card.Body>
                <Card.Title>Contact Keeper</Card.Title>
                <Card.Text>
                MERN application that lets users register and login to their contact keeper to add, delete, and update contacts.
    </Card.Text>
    <Button>
    <a href="https://protected-coast-02689.herokuapp.com/" className="button">Click Here</a>
    </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm project">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="../assets1/project3.png" />
              <Card.Body>
                <Card.Title>Github Finder</Card.Title>
                <Card.Text>
                Full-stack application that helps users search github profiles.
    </Card.Text>
    <Button>
    <a href="https://quirky-mcnulty-d7b8eb.netlify.app/
 " className="button">Click Here</a>
    </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

   
  );
};
  export default Projects