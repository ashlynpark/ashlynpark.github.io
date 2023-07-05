import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import Navvy from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const projStyle = {
    titleContainer: {
        backgroundImage: "url('/odyssey-plane.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    titleTextContainer: {
        justifyContent: 'left',
        alignSelf: 'center',
        width: '110%',
        marginLeft: '-1em',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingLeft: '5%',
        paddingBottom: '2%',
        paddingTop: '8%',
    },
    titleText: {
        fontFamily: 'Maharlika',
        fontSize: '4.5em',
        color: '#daebea',
        textShadow: "0 0 15px rgba(218, 240, 238, 0.5)",
        marginRight: '10%',
    },
    subTitleText: {
        fontFamily: 'Inter',
        fontWeight: '200',
        fontSize: '2em',
        color: '#daebea',
        marginLeft: '1%',
        marginRight: '10%'
    },
    subTitleText2: {
        fontFamily: 'Inter',
        fontWeight: '200',
        fontSize: '1.2em',
        color: '#daebea',
        marginLeft: '1%',
        marginRight: '10%'
    },
    headerimgContainer: {
        height: '30em',
        width: '30em',
        justifyContent: 'left',
        justifySelf: 'left',
        marginLeft: 'auto',
        marginRight: '20%',
        padding: '1em'
    },
    headerimg:{
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto',
        height: 'auto',
        alignSelf: 'right',
        justifySelf: 'right',
        transform: 'rotate(25deg)'
    },
    sectionTextContainer:{
        backgroundColor: '#e1ebea',
        marginTop: '5%',
        padding: '5%',
        borderRadius: '15px',
        justifyContent: 'center',
        alignContent: 'center',
        justifySelf: 'center',
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        width: '85%'
    },
    sectionTextContainer2:{
        padding: '3%',
        borderRadius: '15px',
        justifyContent: 'center',
        alignContent: 'center',
        justifySelf: 'center',
        alignItems: 'center',
        marginBottom: '5%',
        marginLeft: '10%',
        marginRight: '10%',
        width: '85%'
    },
    sectionSubHeading: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '1.3em',
        color: '#2e5059'
    },
    regText: {
        fontFamily: 'Inter',
        fontWeight: '300',
        fontSize: '1.1em',
        color: '#013847',
        marginRight: '3%'
    },
    sectionSubHeading2: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '1.6em',
        color: '#2e5059'
    },
    regText2: {
        fontFamily: 'Inter',
        fontWeight: '300',
        fontSize: '1.2em',
        color: '#013847',
        marginRight: '3%'
    },
    sectionHeading:{
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: '2em',
        color: '#c2d1d0'
    },
    regText3: {
        fontFamily: 'Inter',
        fontWeight: '300',
        fontSize: '1.3em',
        color: '#ddedec',
        marginRight: '3%'
    },

};

const OdysseyProject = () => {
    return(
        <>
            <Navvy selected='projects'/>
            <div className={styles.main} style={{backgroundColor:'#2C4850', justifyContent: 'normal'}}>
                <Container fluid style={projStyle.titleContainer}>
                    <Row style={projStyle.titleTextContainer}>
                        <Col md={12}>
                            <h1 style={projStyle.titleText}>
                                Odyssey
                            </h1>
                            <h2 style={projStyle.subTitleText}>
                                {"A cross-platform mobile app dedicated to helping digital nomads plan their next adventure."}
                           </h2>
                           <h2 style={projStyle.subTitleText2}>
                                <b style={{fontFamily: 'Inter', fontWeight: 500}}>Roles: Frontend Developer, Backend Developer, UX Designer, Technical Writer</b>
                           </h2>
                           <h2 style={projStyle.subTitleText2}>
                                {"January 2023 to June 2023"}
                           </h2>
                        </Col>
                                        
                    </Row>
                </Container>

                <Container style={projStyle.sectionTextContainer}>
                    <Row style={{marginBottom: '3%'}}>
                        <Col sm={12}>
                            <h1 style={projStyle.sectionSubHeading2}>
                                Overview
                            </h1>
                            <p style={projStyle.regText2}>
                             {"Odyssey was developed as a 5-month long senior capstone project by a team of 5 students, with the founders Ari Witt and Zach Little. The app revolutionizes travel planning for remote work-from-anywhere travelers by empowering users to effortlessly craft their entire trip itinerary by seamlessly booking flights, accommodations, and activities tailored to their personal preferences. What sets Odyssey apart is its unique functionality that generates a fully planned itinerary based on individual preferences, eliminating the hassle of piecing together travel arrangements. With the mission to inspire more people to explore the world and experience something bigger than themselves, Odyssey invites users to embark on memorable journeys with ease and confidence."}

                            </p>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '2%'}}>
                        <Col sm={12} md={6}>
                            <h1 style={projStyle.sectionSubHeading2}>
                                Problem
                            </h1>
                            <p style={projStyle.regText2}>
                                {"Travel planning is a hectic and time-consuming process. Often people don’t know how to plan a trip or where to start and most existing travel tools are built for travelers, not remote workers."}
                            </p>
                        </Col>
                        <Col sm={12} md={6}>
                            <h1 style={projStyle.sectionSubHeading2}>
                                Solution
                            </h1>
                            <p style={projStyle.regText2}>
                                {"Odyssey is a mobile app that serves not only as a travel planner and all-in-one booking platform, but provides a fully customized itinerary tailored to the specific needs of the user, digital nomad or otherwise. "}

                            </p>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '3%'}}>
                        <Col sm={12} md={6}>
                            <h1 style={projStyle.sectionSubHeading}>
                                Built With
                            </h1>
                            <p style={projStyle.regText}>
                                <b style={{fontWeight: '600'}}>React Native, Expo, Node.js, Typescript, JavaScript, AWS, various API services, Figma</b>
                            </p>
                        </Col>
                        <Col sm={12} md={6}>
                            <h1 style={projStyle.sectionSubHeading}>
                                Roles
                            </h1>
                            <p style={projStyle.regText}>
                                <b style={{fontWeight: '600'}}>Frontend Developer, Backend Developer, UX Designer, Technical Writer</b>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p style={projStyle.regText}>
                                <b style={{fontWeight: '600'}}>Company site: <a href='https://odysseyapp.com/' style={{color: '#013847'}}>odysseyapp.com</a></b>
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container style={projStyle.sectionTextContainer2}>
                    <Row style={{marginBottom: '3%'}}>
                        <Col sm={12}>
                            <h1 style={projStyle.sectionHeading}>
                                Development
                            </h1>
                            <p style={projStyle.regText3}>
                                {"During an iterative Scrum process, my teammates and I worked closely together to deliver the MVPs of Odyssey as outlined by Ari and Zach. I worked primarily on the frontend development in React Native, AWS backend, the UX design in Figma, and wrote parts of the technical documentation of this system. More about my personal contributions to the project are described below:"}
                            </p>
                        </Col>
                    </Row>
                </Container>

            </div>

        </>
    )
}

export default OdysseyProject;