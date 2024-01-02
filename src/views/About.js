import { Badge, Button, Image, ListGroup } from 'react-bootstrap'

const About = () => {
  return (
    <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
      <div className="startsection" style={{ width: '100%', height: '90vh' }}>
        <div
          className="foto"
          style={{
            display: 'flex',
            float: 'left',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '35vw',
          }}
        >
          <div
            style={{
              position: 'absolute',
              zIndex: '-1',
              width: '40vw',
              height: '25vw',
              border: '2px solid #A79ECD',
              borderRadius: '50%',
              transform: 'rotate(20deg)',
              marginTop: '-100px',
              marginLeft: '-500px',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              zIndex: '-1',
              width: '35vw',
              height: '45vw',
              border: '2px solid #A79ECD',
              borderRadius: '50%',
              transform: 'rotate(120deg)',
              marginTop: '-200px',
              marginLeft: '-500px',
            }}
          ></div>
          <Image
            src="https://avatars.githubusercontent.com/u/118792851?v=4"
            style={{ height: '50vh' }}
          />
        </div>
        <div
          className="info"
          style={{
            display: 'flex',
            float: 'right',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '40vw',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: 'white',
              paddingLeft: '60px',
              paddingRight: '60px',
              paddingTop: '20px',
              paddingBottom: '20px',
              borderRadius: '15%',
            }}
          >
            <h2>
              <b>Hello, I am </b>
              <br />
              <b style={{ color: '#7168A6' }}>Thais Armijos</b>
            </h2>
            <br />
            <p>
              I'm a software engineer passionate about creating impactful
              digital experiences. Although my specialty lies in frontend
              development, my journey also encompasses solid experience in the
              world of backend development. In addition to my role as a
              developer, I have ventured into interface design.
            </p>
            <p>
              In my free time, I explore emerging fields such as artificial
              intelligence, I have carried out small personal projects that
              challenge my skills and knowledge.
            </p>
            <p>
              I consider every day an opportunity to learn something new and
              explore technological horizons. I am excited to continue growing
              on this exciting technological journey and to contribute creative
              solutions to future challenges!
            </p>
            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Button
                style={{
                  backgroundColor: '#7168A6',
                  border: 'none',
                  marginLeft: '30px',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
              >
                DOWNLOAD CV
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="aboutmesection"
        style={{
          width: '100%',
          marginTop: '100px',
          marginBottom: '100px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            zIndex: '-2',
            width: '75vw',
            height: '25vw',
            backgroundColor: '#F0EEF8',
            transform: 'rotate(10deg)',
            marginTop: '150px',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            zIndex: '-1',
            width: '35vw',
            height: '27vw',
            border: '2px solid #A79ECD',
            transform: 'rotate(35deg)',
            marginTop: '150px',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            zIndex: '-1',
            width: '30vw',
            height: '20vw',
            border: '2px solid #A79ECD',
            transform: 'rotate(125deg)',
            marginTop: '150px',
            right: '150px',
          }}
        ></div>
        <div
          className="skills"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '77vh',
          }}
        >
          <div
            className="cards"
            style={{
              display: 'flex',
              float: 'left',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'start',
              width: '50vw',
              height: '20vw',
            }}
          >
            <Button
              variant="light"
              style={{ marginRight: '20px',  marginTop: '20vh',padding: '20px' }}
            >
              <ListGroup.Item>
                <b>Programming Languages:</b>
                <br />
                <Badge bg="primary" className="ms-1">
                  JavaScript
                </Badge>
                <Badge bg="primary" className="ms-1">
                  TypeScript
                </Badge>
                <Badge bg="primary" className="ms-1">
                  Java
                </Badge>
                <Badge bg="primary" className="ms-1">
                  Python
                </Badge>
                <Badge bg="primary" className="ms-1">
                  Php
                </Badge>
                <Badge bg="primary" className="ms-1">
                  C#
                </Badge>
                <Badge bg="primary" className="ms-1">
                  Kotlin
                </Badge>
              </ListGroup.Item>
            </Button>
            <br />
            <Button
              variant="light"
              style={{
                marginRight: '20px',
                marginTop: '10vh',
                padding: '20px',
              }}
            >
              <ListGroup.Item>
                Frameworks & Technologies:
                <br />
                <Badge bg="success" className="ms-1">
                  React
                </Badge>
                <Badge bg="success" className="ms-1">
                  React Native
                </Badge>
                <Badge bg="success" className="ms-1">
                  Angular
                </Badge>
                <Badge bg="success" className="ms-1">
                  Ionic
                </Badge>
                <Badge bg="success" className="ms-1">
                  Figma
                </Badge>
                <Badge bg="success" className="ms-1">
                  Adobe XD
                </Badge>
              </ListGroup.Item>
            </Button>
            <Button
              variant="light"
              style={{
                marginTop: '0vh',
                padding: '20px',
              }}
            >
              <ListGroup.Item>
                Databases:
                <br />
                <Badge bg="warning" className="ms-1">
                  MySQL
                </Badge>
                <Badge bg="warning" className="ms-1">
                  MongoDB
                </Badge>
                <Badge bg="warning" className="ms-1">
                  Firebase
                </Badge>
                <Badge bg="warning" className="ms-1">
                  SQL Server
                </Badge>
              </ListGroup.Item>
            </Button>
          </div>
          <div
            className="cardprojects"
            style={{
              flexDirection: 'column',
              textAlign: 'right',
              width: '15vw',
              height: '20vw',
              marginTop: '200px',
            }}
          >
            <p
              style={{
                fontSize: '12px',
                letterSpacing: '2px',
                marginBottom: '0px',
              }}
            >
              <b>EXPLORE MY WORK</b>
            </p>
            <h1>
              <b style={{ color: '#7168A6' }}>My Projects</b>
            </h1>
            <br />
            <p>
              Dive into my portfolio and discover the diverse range of projects
              I have created throughout my time as a programmer. Explore a world
              of development skills and creativity in my projects.
            </p>
            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Button variant="outline-dark">GO TO PROJECTS</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4"></div>
    </div>
  )
}

export default About
