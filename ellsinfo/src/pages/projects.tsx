import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import Navvy from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


const Projects = () => {
    return(
        <>
            <Navvy selected='projects'/>
            <div className={styles.main} style={{backgroundColor: '#416154', display: 'block' }}>
                <Container fluid className={styles.projectstitlecontainer}>
                    <div className={styles.titlecontainerdark}>
                        <h1 className={styles.pageletter2}>P</h1>
                        <h1 className={styles.pagetitle2}>
                            rojects
                        </h1>                  
                    </div>
                </Container>
                
                <Container fluid>
                    <Row>
                        <Col xs={11} md={3} style={{margin:'3%'}}>
                            <div className={styles.projectmenu}>
                                <p className={styles.projectmenutext}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Col>
                        <Col xs={11} md={9}>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

const ProjectCard = (props: {title: string, skills: string, date: string, tags?: string[], description?: string}) => {
    return(
        <Row>
            <Col>
            </Col>

        </Row>
    )
}

export default Projects;