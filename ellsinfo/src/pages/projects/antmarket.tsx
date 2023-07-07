import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import Navvy from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const projStyle = {
    titleContainer: {
        backgroundImage: "url('/uciaerial.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    titleTextContainer: {
        justifyContent: 'left',
        alignSelf: 'center',
        width: '110%',
        marginLeft: '-1em',
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        paddingLeft: '5%',
        paddingBottom: '2%',
        paddingTop: '8%',
    },
    titleText: {
        fontFamily: 'Maharlika',
        fontSize: '4.5em',
        color: '#deebda',
        textShadow: "0 0 15px rgba(218, 240, 238, 0.5)",
        marginRight: '10%',
    },
    subTitleText: {
        fontFamily: 'Inter',
        fontWeight: '200',
        fontSize: '2em',
        color: '#deebda',
        marginLeft: '1%',
        marginRight: '10%'
    },
    subTitleText2: {
        fontFamily: 'Inter',
        fontWeight: '200',
        fontSize: '1.2em',
        color: '#deebda',
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
        backgroundColor: '#e2ebe1',
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
        color: '#e1ebea',
        marginRight: '3%'
    },

};

const AntMarketProject = () => {
    return(
        <>
            <Navvy selected=''/>
            <div className={styles.main} style={{backgroundColor:'#203d2e', justifyContent: 'normal'}}>
                <Container fluid style={projStyle.titleContainer}>
                    <Row style={projStyle.titleTextContainer}>
                        <Col md={12}>
                            <h1 style={projStyle.titleText}>
                                AntMarket
                            </h1>
                            <h2 style={projStyle.subTitleText}>
                                {"A mobile app for UCI students to easily sell, give away, and purchase items."}
                           </h2>
                           <h2 style={projStyle.subTitleText2}>
                                <b style={{fontFamily: 'Inter', fontWeight: 500}}>Roles: Frontend Developer, UX Designer, Technical Writer</b>
                           </h2>
                           <h2 style={projStyle.subTitleText2}>
                                {"April 2023 to June 2023"}
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
                             {"AntMarket was conceptualized to be a mobile college student marketplace to sell or give away furniture and various supplies. In particular, the team wanted to develop a mobile application with the React Native framework that will serve as a UCI student resource. The purpose of this project is to solve the issue that many moving (in and out) students face when they want to get items for less or want to get rid of belongings they don’t want to keep."}

                            </p>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '2%'}}>
                        <Col sm={12} md={6}>
                            <h1 style={projStyle.sectionSubHeading2}>
                                Problem
                            </h1>
                            <p style={projStyle.regText2}>
                                {"Looking at the UCI population, many students relocate to the UCI community temporarily for their education. When moving into the area, these students tend to need various furniture and supplies for both their temporary housing and schooling. When moving out, these students tend to have their UCI furniture and supplies that they may not want to bring back with them to their homes. Currently, students moving in and out of the area are going to online forums such as Reddit and Facebook Marketplace to buy and sell their belongings, and that’s where we see an opportunity."}
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
                                <b style={{fontWeight: '600'}}>React Native, Expo, Amazon Web Services, Node.js, DynamoDB, Typescript, JavaScript, various API services, Figma</b>
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
                                <b style={{fontWeight: '600', fontSize: '1.1em'}}>Company site: <a href='https://odysseyapp.com/' style={{color: '#013847'}}>odysseyapp.com</a></b>
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container style={projStyle.sectionTextContainer2}>
                    <Row style={{marginBottom: '3%'}}>
                        <Col sm={12}>
                            <h1 style={projStyle.sectionHeading}>
                                MVPs
                            </h1>
                            <p style={projStyle.regText3}>
                                 {"The MVPs for this five month project were defined as the following:"}
                            </p>
                            <ul style={projStyle.regText3}>
                                <li><b style={{fontWeight: '500'}}>Customized Itinerary</b>: In order to receive a fully personalized itineary, the user must fill out a questionnaire on their preferences for their next trip.
                                    <ul>
                                        <li><b style={{fontWeight: '500'}}>Questionnaire</b>: The tasks for creating the questionnaire were to create the data schema for the questionnaire, implement the designs for each screen in React Native, and upon submission, send the questionnaire response to the Odyssey web app.</li>
                                        <li><b style={{fontWeight: '500'}}>Payment Processing</b>: Upon completion of the questionnaire, and before submission, the user should pay $5 in order to receive their personalized itinerary.</li>

                                    </ul>
                                </li>
                            </ul>
                        </Col>
                    </Row>
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

export default AntMarketProject;