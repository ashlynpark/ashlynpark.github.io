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
            <div className={styles.main} style={{backgroundColor: '#7e9c74'}}>
                <Container fluid className={styles.projectstitlecontainer}>

                </Container>
            </div>

        </>
    )
}

export default Projects;