import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {

    return (
        <section className="banner" id="about">
            
            <Container>
                
                <Row className="aligh-items-center">
                    
                    <Col xs={12} md={12} xl={2}></Col>
                    <Col xs={12} md={12} xl={9}>
                        <h3 className="mb-5">Betsy here👋...</h3>
                        <TrackVisibility>
                            {({ isVisible }) =>
                               
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <p style={{ "textAlign": "center", "fontSize": "20px", "lineHeight": "35px" }}>I am a person who is passionate about <span style={{ "color": "#512da8" }}>space science and technology.</span> I joined the Software Engineering department at <span style={{ "color": "#512da8" }}>Addis Ababa Institute of Technology</span> to contribute to the space industry. After I joined <span style={{ "color": "#512da8" }}>Software Engineering</span>, I keep being more <span style={{ "color": "#512da8" }}>interested</span> in the field, and what I can do with it. </p>
                                    <br />
                                    <p style={{ "textAlign": "center", "fontSize": "20px", "lineHeight": "35px" }}>My favourite programming languages are <span style={{ "color": "#512da8" }}>Python</span>  and <span style={{ "color": "#512da8" }}>JavaScript</span>, but I also work with <span style={{ "color": "#512da8" }}>Java</span> and <span style={{ "color": "#512da8" }}>C#</span>. I am fascinated by <span style={{ "color": "#512da8" }}>System Programming</span>, which made me love <span style={{ "color": "#512da8" }}>C</span> and <span style={{ "color": "#512da8" }}>Linux</span>.</p>
                                    <br />
                                    <p style={{ "textAlign": "center", "fontSize": "20px", "lineHeight": "35px" }}><span style={{ "color": "#512da8" }}>Currently</span>, I am expanding my horizon by taking different <span style={{ "color": "#512da8" }}>programming challenges</span>, which will help me to work in <span style={{ "color": "#512da8" }}>System Programming </span> and <span style={{ "color": "#512da8" }}>AI</span>.</p>

                                
                                </div>}
                        </TrackVisibility>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}
