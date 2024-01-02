import { Badge, Button, Image, ListGroup, Nav, Navbar } from 'react-bootstrap'
import FooterFondo from '../asserts/footer'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import GithubIcon from '../asserts/githubIcon'
import LinkedinIcon from '../asserts/linkedinIcon'
import FacebookIcon from '../asserts/facebookIcon'
import InstagramIcon from '../asserts/instagramIcon'
import MailIcon from '../asserts/mailIcon'
import FondoBurbujas from '../asserts/fondoBurbujas'
import Fondo from '../asserts/fondo'
import Fade from 'react-reveal/Fade'
import Swing from 'react-reveal/Swing'
import Flip from 'react-reveal/Flip'
import curriculum from '../asserts/fotoIO.jpeg'

const HomePage = () => {
  const projectsData = [
    {
      id: 1,
      nombre: 'Online Voting System for School',
      gitLink: 'https://github.com/AndresTGonzalez/elecciones-ueb-frontend',
      descripcion:
        'The system has served to optimize the voting process at a school with approximately 3,500 students. It was implemented in a school in the city of Ambato, Tungurahua, Ecuador, and has been operational since June 2023.',
      tecnologias: [
        'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
      ],
      urlimg:
        'https://camo.githubusercontent.com/de71db91ecf968a94c2f4ab9a081a15a74f39670514694b4a09505256e322a47/68747470733a2f2f63646e2e676c697463682e676c6f62616c2f36376364343732622d373263362d346237322d386639312d3363333338376362663434362f31393735323562652d303537362d343934642d623439332d3932623662386239326630662e696d6167652e706e673f763d31373031383138323137353433',
    },
    {
      id: 2,
      nombre: 'Website for Clinical Laboratory',
      gitLink: 'https://github.com/ArmijosThais/FrontEnd_Web_BioTest',
      descripcion:
        'I invite you to explore this interface that simulates the website of a clinical laboratory. It contains both public pages and administrative tools for managing queries and generating results.',
      tecnologias: [
        'https://angular.io/assets/images/logos/angular/angular.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      ],
      urlimg:
        'https://github.com/ArmijosThais/ArmijosThais/raw/main/img/biotest.png',
    },
    {
      id: 3,
      nombre: 'Mobile Book Store',
      gitLink: 'https://github.com/ArmijosThais/MovilBookStore',
      descripcion:
        'Find a complete, mobile-friendly interface for an online store that includes CRUD, shopping cart functionalities, and more.',
      tecnologias: [
        'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      ],
      urlimg:
        'https://github.com/ArmijosThais/MovilBookStore/assets/118792851/ff0e9034-5723-49fc-a532-f724cfa87cd1',
    },
    {
      id: 4,
      nombre: 'Face recognition with SVM',
      gitLink: 'https://github.com/ArmijosThais/ReconocimientoFacial',
      descripcion:
        "This program uses the functionality of the computer's integrated camera to perform facial recognition in real time. Using artificial intelligence algorithms, it identifies and detects faces within the video stream.",
      tecnologias: [
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      ],
      urlimg:
        'https://th.bing.com/th/id/OIG.9PzWrpVhMHCPEug0br7Z?w=1024&h=1024&rs=1&pid=ImgDetMain',
    },
  ]

  const handleRedirect = (url) => {
    window.open(url, '_blank') // Abre el URL en una nueva ventana del navegador
  }

  return (
    <>
      <div
        style={{
          position: 'absolute',
          height: '200px',
          width: '100%',
          zIndex: '-1',
          top: 0,
        }}
      >
        <Fondo />
      </div>
      <Navbar
        style={{
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        sticky="top"
        activeKey="#start"
      >
        <Nav variant="underline">
          <Nav.Link href="#start" style={{ margin: '10px' }}>
            HOME
          </Nav.Link>
          <Nav.Link href="#aboutme" style={{ margin: '10px' }}>
            ABOUT ME
          </Nav.Link>
          <Nav.Link href="#myprojects" style={{ margin: '10px' }}>
            MY PROJECTS
          </Nav.Link>
          <Nav.Link href="#contacme" style={{ margin: '10px' }}>
            CONTACT ME
          </Nav.Link>
        </Nav>
      </Navbar>
      <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
        <div
          id="start"
          className="startsection"
          style={{ width: '100%', height: '80vh' }}
        >
          <div
            className="info"
            style={{
              display: 'flex',
              float: 'left',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '35vw',
              textAlign: 'left',
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
                marginLeft: '-1020px',
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
                marginLeft: '-1100px',
              }}
            ></div>
            <Fade left>
              <div
                style={{
                  width: '80%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <h1>
                  <b>Hi, I am </b>
                  <b style={{ color: '#7168A6' }}>Thais</b>
                </h1>
                <h2
                  style={{
                    fontSize: '20px',
                    letterSpacing: '2px',
                    marginBottom: '0px',
                  }}
                >
                  <b>A SOFTWARE DEVELOPER</b>
                </h2>
                <br />
                <p>
                  With expertise across diverse technologies, ranging from
                  database management to crafting engaging user interfaces.
                </p>
                <br />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '75%',
                  }}
                >
                  <GithubIcon
                    onClick={() => {
                      handleRedirect('https://github.com/ArmijosThais')
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                  <LinkedinIcon
                    onClick={() => {
                      handleRedirect('www.linkedin.com/in/thaisarmijostroya')
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                  <FacebookIcon
                    onClick={() => {
                      handleRedirect(
                        'https://www.facebook.com/profile.php?id=100008529360721&mibextid=ZbWKwL'
                      )
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                  <InstagramIcon
                    onClick={() => {
                      handleRedirect('https://www.instagram.com/thais_armijos/')
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </Fade>
          </div>
          <Fade top>
            <div
              className="foto"
              style={{
                display: 'flex',
                float: 'right',
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
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  transform: 'rotate(20deg)',
                  marginTop: '50px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  zIndex: '-1',
                  width: '25vw',
                  height: '25vw',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  transform: 'rotate(120deg)',
                  marginTop: '200px',
                  marginLeft: '50px',
                }}
              ></div>
              <Image
                src={curriculum}
                roundedCircle
                style={{ width: '30vw', height: '30vw', objectFit: 'cover' }}
              />
            </div>
          </Fade>
        </div>
        <br />
        <div
          id="aboutme"
          className="aboutmesection"
          style={{
            width: '100%',
            marginTop: '100px',
            display: 'flex',
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
            className="aboutme-resume"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              paddingTop: '100px',
              width: '50%',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            <Fade bottom>
              <p
                style={{
                  fontSize: '16px',
                  letterSpacing: '2px',
                  marginBottom: '0px',
                }}
              >
                <b> ABOUT ME </b>
              </p>
              <h1>
                <b style={{ color: '#7168A6' }}>Let me introduce myself</b>
              </h1>
              <br />
              <p>
                I'm a software engineer passionate about creating impactful
                digital experiences. Although my specialty lies in frontend
                development, my journey also encompasses solid experience in the
                world of backend development. In addition to my role as a
                developer, I have ventured into interface design.
              </p>
            </Fade>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Fade left>
                <p
                  style={{
                    width: '60%',
                    marginLeft: '-20%',
                    textAlign: 'left',
                  }}
                >
                  In my free time, I explore emerging fields such as artificial
                  intelligence, I have carried out small personal projects that
                  challenge my skills and knowledge.
                </p>
              </Fade>
              <Fade right>
                <p
                  style={{
                    width: '60%',
                    marginRight: '-20%',
                    textAlign: 'right',
                  }}
                >
                  I consider every day an opportunity to learn something new and
                  explore technological horizons. I am excited to continue
                  growing on this exciting technological journey and to
                  contribute creative solutions to future challenges!
                </p>
              </Fade>
            </div>
            <br />
            <Button
              style={{
                backgroundColor: '#7168A6',
                border: 'none',
                marginLeft: '30px',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              onClick={() => {
                handleRedirect(
                  'https://drive.google.com/file/d/1C_Nc6WjBCzplvS_kkTfdWvyLnutdy5uM/view?usp=sharing'
                )
              }}
            >
              DOWNLOAD CV
            </Button>
            <br />
            <br />
            <br />
            <br />
            <h1>
              <b style={{ color: '#7168A6' }}>My skills</b>
            </h1>
            <br />
            <div
              className="cards"
              style={{
                display: 'flex',
                float: 'left',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                width: '60vw',
                height: '15vw',
              }}
            >
              <Swing>
                <Card
                  style={{
                    marginRight: '20px',
                    marginTop: '0vh',
                    padding: '20px',
                    width: '20vw',
                  }}
                >
                  <Card.Body>
                    <ListGroup.Item>
                      <b>Programming Languages</b>
                      <br />
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
                  </Card.Body>
                </Card>
              </Swing>
              <Swing>
                <Card
                  style={{
                    marginRight: '20px',
                    marginTop: '10vh',
                    padding: '20px',
                    width: '20vw',
                  }}
                >
                  <Card.Body>
                    <ListGroup.Item>
                      <b>Databases</b>
                      <br />
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
                  </Card.Body>
                </Card>
              </Swing>
              <Swing>
                <Card
                  style={{
                    marginRight: '20px',
                    marginTop: '0vh',
                    padding: '20px',
                    width: '20vw',
                  }}
                >
                  <Card.Body>
                    <ListGroup.Item>
                      <b>Frameworks & Technologies</b>
                      <br />
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
                  </Card.Body>
                </Card>
              </Swing>
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              zIndex: '-1',
              transform: 'rotate(100deg)',
              marginTop: '750px',
              marginLeft: '-30vw',
            }}
          >
            <FondoBurbujas />
          </div>
          <div
            style={{
              position: 'absolute',
              zIndex: '-1',
              marginTop: '1000px',
              marginLeft: '20vw',
            }}
          >
            <FondoBurbujas />
          </div>
        </div>
        <br />
        <div
          id="myprojects"
          className="projectssection"
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'column',
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
              marginTop: '650px',
              marginLeft: '-600px',
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
              marginTop: '500px',
              marginLeft: '-600px',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              zIndex: '-1',
              width: '30vw',
              height: '30vw',
              border: '2px solid #A79ECD',
              borderRadius: '50%',
              transform: 'rotate(10deg)',
              marginTop: '750px',
              right: '50px',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              zIndex: '-1',
              width: '30vw',
              height: '30vw',
              border: '2px solid #A79ECD',
              borderRadius: '50%',
              transform: 'rotate(10deg)',
              marginTop: '800px',
              right: '70px',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              zIndex: '-1',
              width: '30vw',
              height: '20vw',
              border: '2px solid #A79ECD',
              borderRadius: '50%',
              transform: 'rotate(120deg)',
              marginTop: '700px',
              right: '50px',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              zIndex: '-1',
              width: '30vw',
              height: '20vw',
              border: '2px solid #A79ECD',
              borderRadius: '50%',
              transform: 'rotate(120deg)',
              marginTop: '700px',
              right: '60px',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              zIndex: '-1',
              width: '40vw',
              height: '25vw',
              borderRadius: '50%',
              transform: 'rotate(20deg)',
              marginTop: '1150px',
              marginLeft: '-600px',
            }}
          >
            <FondoBurbujas />
          </div>
          <Fade left>
            <div
              className="introduce-projects"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                paddingTop: '100px',
                width: '50%',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  letterSpacing: '2px',
                  marginBottom: '0px',
                }}
              >
                <b>MY PROJECTS</b>
              </p>
              <h1>
                <b style={{ color: '#7168A6' }}>Explore my work</b>
              </h1>
              <br />
              <p>
                Discover some of my projects! Take a look at some of the
                creations I've worked on. Feel free to explore and check out my
                most recent work. I'm excited to share my work with you!
              </p>
            </div>
          </Fade>
          <Row xs={1} md={2} className="g-4">
            {projectsData.map((project) => (
              <Col key={project.id}>
                <Card
                  style={{
                    height: '33rem',
                  }}
                  bg={project.urlimg}
                >
                  <Card.Img
                    variant="top"
                    src={project.urlimg}
                    style={{
                      width: '100%',
                      height: '240px',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{project.nombre}</Card.Title>
                    <Card.Text>
                      <div
                        style={{
                          margin: '10px',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}
                      >
                        {project.tecnologias.map((item) => (
                          <div
                            style={{
                              marginLeft: '10px',
                              marginRight: '10px',
                            }}
                          >
                            <img
                              src={item}
                              alt="android"
                              width="50"
                              height="50"
                            />
                          </div>
                        ))}
                      </div>
                      {project.descripcion}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="light"
                      style={{ width: '100%' }}
                      onClick={() => handleRedirect(project.gitLink)}
                    >
                      Visit on GitHub
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          <div
            style={{
              textAlign: 'center',
              width: '70%',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: '50px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Fade right>
              <p>
                Do you want to see more? Visit my profile on GitHub to discover
                a larger collection of my projects. There you will find a
                variety of creations, from simple applications to more complex
                projects.
              </p>
              <Button
                style={{
                  backgroundColor: '#7168A6',
                  border: 'none',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  width: 'fit-content',
                }}
                onClick={() =>
                  handleRedirect('https://github.com/ArmijosThais')
                }
              >
                MORE PROJECTS
              </Button>
            </Fade>
          </div>
        </div>
        <br />
        <div
          id="contacme"
          className="contactsection"
          style={{
            width: '100%',
            paddingLeft: '25%',
            paddingRight: '25%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '100px',
          }}
        >
          <Flip top cascade>
            <p
              style={{
                fontSize: '16px',
                letterSpacing: '2px',
                marginBottom: '0px',
                color: '#7168A6',
              }}
            >
              <b> CONTACT ME </b>
            </p>
            <h2>
              <b>Feel free to say Hi</b>
              <b style={{ color: '#7168A6' }}>!</b>
            </h2>
            <p>
              I would love to know more about you and how I can help you. If you
              have questions, ideas, or just want to chat, don't hesitate to{' '}
              <b style={{ color: '#7168A6' }}>contact me!</b> I'm here to make
              things easier for you.
            </p>
          </Flip>
        </div>

        <div
          className="contactsection2"
          style={{
            justifyContent: 'space-around',
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Fade right cascade>
            <div
              className="cardredes"
              style={{
                display: 'flex',
                float: 'right',
                flexDirection: 'column',
                width: '30vw',
                marginTop: '50px',
                textAlign: 'right',
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  letterSpacing: '2px',
                  marginBottom: '0px',
                }}
              >
                <b>SEND ME A MESSAGE</b>
              </p>
              <h1>
                <b style={{ color: '#7168A6' }}>Social Networks</b>
              </h1>
              <br />
              <p>
                I'm always willing to chat about technology, share ideas or
                answer questions. I look forward to your message! You can find
                me on:
              </p>
              <br />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '75%',
                  marginLeft: '20%',
                }}
              >
                <GithubIcon
                  onClick={() => {
                    handleRedirect('https://github.com/ArmijosThais')
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <LinkedinIcon
                  onClick={() => {
                    handleRedirect('www.linkedin.com/in/thaisarmijostroya')
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <FacebookIcon
                  onClick={() => {
                    handleRedirect(
                      'https://www.facebook.com/profile.php?id=100008529360721&mibextid=ZbWKwL'
                    )
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <InstagramIcon
                  onClick={() => {
                    handleRedirect('https://www.instagram.com/thais_armijos/')
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </Fade>
          <Fade left cascade>
            <div
              className="cardemail"
              style={{
                display: 'flex',
                float: 'left',
                flexDirection: 'column',
                textAlign: 'left',
                width: '30vw',
                marginTop: '150px',
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  letterSpacing: '2px',
                  marginBottom: '0px',
                }}
              >
                <b>SEND ME AN EMAIL</b>
              </p>
              <h1>
                <b style={{ color: '#7168A6' }}>E-mail</b>
              </h1>
              <br />
              <p>
                If social media isn't your thing, don't worry! Feel free to send
                me an email. I'm always waiting to respond as soon as possible!
              </p>
              <br />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'left',
                  width: '100%',
                }}
              >
                <Card>
                  <Card.Body>
                    <MailIcon /> <b>tarmijos02@gmai.com</b>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Fade>
        </div>
        <div
          className="footer"
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FooterFondo />
        </div>
      </div>
    </>
  )
}

export default HomePage
