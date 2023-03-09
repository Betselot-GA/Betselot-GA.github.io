import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { TimelineOppositeContent } from "@material-ui/lab";


const paperstyle = {
    padding: '8px 1px',
    textAlign: 'center',
    color: "#512da8",
    backgroundColor: "#151515"

}

export const Experience = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>My Experience👨‍💻</h2>
                            <p>Here are some of my past experiences as a Software Engineer.<br></br> Some of them are Full Time jobs and some are Internships.</p>
                            <Timeline align="alternate">
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary">
                                            April 2022 - December 2022 |US
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} style={paperstyle} className='h4'>Repibox : Software Engineer

                                            <Typography variant="body1" component="p">
                                                <ul style={{ "textAlign": "left" }}>
                                                    <li>Collaborated with cross-functional teams to develop and maintain complex web applications using React, Node.js, and related technologies.</li>
                                                    <li>Designed and implemented reusable components, optimized performance, and ensured accessibility for users with disabilities.</li>
                                                    <li>Troubleshot and resolved technical issues, providing support to users and other developers.</li>
                                                </ul>
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary">
                                            March 2022 - July 2022 | Ethiopia
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} style={paperstyle} className='h4'>Ethiopian Public Health Institute : Frontend Engineer
                                            <Typography variant="body1" component="p">
                                                <ul style={{ "textAlign": "left" }}>
                                                    <li>Built and maintained dynamic websites using React, Node.js, and related technologies.</li>
                                                    <li>Developed custom components and optimized website performance for a better user experience.</li>
                                                    <li>Provided technical support to users, resolving issues and ensuring high levels of customer satisfaction.</li>
                                                    <li>Contributed to the development and implementation of new features and functionalities.</li>
                                                </ul>
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary">
                                            August 2021 - April 2022 | Ethiopia
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3}
                                            style={paperstyle} className='h4'>Tefer Consolidate : Junior Developer
                                            <Typography variant="body1" component="p">
                                                <ul style={{ "textAlign": "left" }}>
                                                    <li>Developing developers lesson plan for Online learners on MongoDB, Express, Angular and Node.</li>
                                                    <li>Debugged and Fized Front end applications developed with AngularDart and Angular</li>

                                                </ul>
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary">
                                            September 2021 - December 2021 | Ethiopia
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3}

                                            style={paperstyle} className='h4'>Botaye Software : Engineer
                                            <Typography variant="body1" component="p">
                                                <ul style={{ "textAlign": "left" }}>
                                                    <li>Designed and implemented new features to improve website's user experience, resulting in a 10% increase in conversions</li>
                                                    <li>Collaborated with designers and stakeholders to ensure that the website meets accessibility standards</li>
                                                    <li>Utilized Git for version control and collaborated on code review with other team members</li>
                                                </ul>
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
