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
            <div className={styles.main} style={{backgroundColor: '#416154'}}>
                <Container fluid className={styles.projectstitlecontainer}>
                    <div className={styles.titlecontainerdark}>
                        <h1 className={styles.pageletter2}>P</h1>
                        <h1 className={styles.pagetitle2}>
                            rojects
                        </h1>                  
                    </div>
                </Container>
                <Container fluid>

                </Container>
            </div>

        </>
    )
}

export default Projects;