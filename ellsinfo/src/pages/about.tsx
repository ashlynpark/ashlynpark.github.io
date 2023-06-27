import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import Navvy from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
    return(
        <div>
            <Navvy selected='about'/>
            <div className={styles.main} style={{paddingTop: '60px', backgroundColor: '#7e9c74'}}>
                <div className={styles.titlecontainer}>
                    <div className={styles.titlecontainerdark}>
                        <h1 className={styles.pageletter}>A</h1>
                        <h1 className={styles.pagetitle}>
                            bout me
                        </h1>                  
                    </div>
                    <div style={{flexDirection: 'row', display: 'flex', marginLeft: '10%', marginRight: '10%', marginBottom: '5%', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                        <div className={styles.smallpiccontainer}>
                            <img src='/me.jpg' className={styles.smallpic}/>
                        </div>
                        <div style={{flex: 3}}>
                            <p className={styles.desc}>Hi there!</p>
                            <h1 className={styles.subtitle}>I'm Ell.</h1>
                            
                            <h2 className={styles.subtitle2}>Software Developer + UX Designer</h2>
                            {/* Email: ellsuninfo@gmail.com  |  Connect with me on LinkedIn */}
                            <p className={styles.desc}>{"Realize your unique digital vision! Want a fully customized website? Interested in creating a mobile app? All you need are your ideas; let's build together!"}</p>
                        </div>
                    </div>
                    <div style={{padding: '3.5em', marginLeft: '7%', marginRight: '7%', backgroundColor: '#faf9f5', borderRadius: 10, marginBottom: '5%'}}>
                        <p className={styles.bodytext}>
                        Hey there! I'm Ell, a software engineer and recent graduate from UC Irvine with a B.S. in Informatics. Throughout my time at college, I have discovered a passion for software engineering, UX design and research, and the intersections of technology and social justice. I would love to enrich my knowledge in these fields by engaging with professionals in the field and learning through hands-on experience with software engineering projects.
                        My interests outside of technology include art, crocheting, writing, environmentalism, and social justice, especially the topics of class and race theory and LGBTQ+ rights.  An important career goal of mine is to contribute my efforts to software development projects that will benefit marginalized communities, whether that is in the role of developer, researcher, or designer.  I know that I can take on any of these roles because I have had experience in my courses performing each role and I am hard-working, pragmatic, creative, detail-oriented, and passionate.
                        Currently, I'm working as a Computer Science Instructor at Juni Learning. The most valuable things I have gained during my time teaching my students are communication skills, adaptability, patience, and a deeper appreciation for programming languages .I have found that I love to work with both technology and people, and discovered a passion for helping and encouraging children to explore careers in STEM, especially girls and children of color who are underrepresented in the field of computer science. 
                        </p>
                    </div>                
   
                </div>
            </div>

        </div>
    )
}

export default About;