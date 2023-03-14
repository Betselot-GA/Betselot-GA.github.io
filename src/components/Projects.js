import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projimg1.jpg";
import projImg2 from "../assets/img/projimg2.jpg";
import projImg3 from "../assets/img/projimg3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Kendel Digital Magazine",
      description: "Design & Development",
      imgUrl: projImg2,
      projectlink: "https://celadon-custard-aeee6a.netlify.app/"
    },
    {
      title: "Special Education",
      description: "Design & Development",
      imgUrl: projImg1,
      projectlink:"https://special-education.vercel.app/"
    },
    // {
    //   title: "Repibox Recipe Website",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    //   projectlink:"https://repibox.vercel.app/"
    // },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of the projects I worked on.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
