import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import Navvy from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const buildy ={
    section: {
        backgroundColor: 'rgba(247, 248, 240, 0.5)',
        padding: '3%',
        alignSelf: 'center',
        justifySelf: 'center',
        width: '60%',
        marginTop: '3%',
        borderRadius: 10
    },
    sectionText: {
        color: '#343b3b',
        fontFamily: 'Inter',
        fontWeight: '500'
    }
}

const BuildWithMe = () => {
    return(
        <>
            <Navvy selected='build'/>
            <div className={styles.main} style={{backgroundColor: '#343b3b', display: 'block', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: '-8px' }}>
                <Container fluid className={styles.buildtitlecontainer} style={{paddingBottom: '1%'}}>
                    <div className={styles.titlecontainerdark}>
                        <h1 className={styles.pageletter3}>B</h1>
                        <h1 className={styles.pagetitle3}>
                            uild with me
                        </h1>                  
                    </div>
                    <h2 className={styles.subheading3}>{"Your digital brand, one pixel at a time"}</h2>
                    <h3 className={styles.subheading4}>{"fully customized web and mobile solutions"}</h3>
                    <div style={buildy.section}>
                        <p style={buildy.sectionText}>djfh sdkjflh d daslfjhd dafha adlksjfh adjfha </p>
                    </div>
                </Container>
            
            </div>

        </>
    )
}

export default BuildWithMe;