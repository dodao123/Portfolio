import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img1.jpg";
import projImg6 from "../assets/img/project-img2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard"; // Điều chỉnh path nếu cần

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "RPG Game Topdown Survival",
      description: "A survival role-playing game with top-down perspective, where players must fight enemies and manage resources.",
      category: "Game Design & Development",
      imgUrl: projImg1,
      videoUrl: "https://www.youtube.com/embed/nf9i2Hxb5Mk",
      githubUrl: "https://github.com/yourname/project1",
    },
    {
      title: "Gesture Racing Car Monitoring",
      description: "A racing game controlled using hand gestures, integrating Python with Unity for real-time gesture recognition.",
      category: "Game Design & Development",
      imgUrl: projImg2,
      videoUrl: "/ProjectVideo/video2.mp4",
      githubUrl: "https://github.com/yourname/project2",
    },
    {
      title: "Edu WarriorWarrior",
      description: "An educational adventure game where players solve questions and progress through a fun storyline.",
      category: "Game Design & Development",
      imgUrl: projImg5,
      videoUrl: "/ProjectVideo/video4.mp4",
      githubUrl: "https://github.com/yourname/project3",
    },
    {
      title: "Runner & Fighting with Monsters Game",
      description: "An endless runner game with combat features, requiring players to fight off monsters and avoid obstacles.",
      category: "Game Design & Development",
      imgUrl: projImg3,
      videoUrl: "/ProjectVideo/video3.mp4",
      githubUrl: "https://github.com/yourname/project4",
    },
    {
      title: "Introduction Math CLB Website",
      description: "A clean and informative website for the Math Club, including club activities, resources, and member profiles.",
      category: "Web Design & Development",
      imgUrl: projImg4,
      githubUrl: "https://loptoancoxuan.vercel.app/",
    },
    {
      title: "TSA Test Exam Website",
      description: "A clean and informative website for the TSA exam, with easy navigation and clear exam preparation resources.",
      category: "Web Design & Development",
      imgUrl: projImg6,
      githubUrl: "https://github.com/yourname/project6",
    },
  ];

  const handleShowModal = (project) => {
    if (project.videoUrl) {
      setSelectedProject(project);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <Col key={index} sm={6} md={4} className="mb-4">
                              <div
                                className="proj-imgbx"
                                onClick={() => handleShowModal(project)}
                                style={{
                                  cursor: project.videoUrl ? "pointer" : "default",
                                  opacity: project.videoUrl ? 1 : 0.6
                                }}
                              >
                                <img src={project.imgUrl} alt={project.title} className="img-fluid" />
                                <div className="proj-txtx">
                                  <h4>{project.title}</h4>
                                  <span>{project.description}</span>
                                  {project.githubUrl && (
                                    <a
                                      href={project.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="github-link"
                                    >
                                      View on GitHub
                                    </a>
                                  )}
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modal hiển thị video */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject?.videoUrl?.includes("youtube.com") ? (
            <iframe
              width="100%"
              height="380"
              src={selectedProject.videoUrl}
              title="Project Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video width="100%" height="400" controls>
              <source src={selectedProject?.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
