import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Navvy from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

  
// Tags: Research, Frontend, Backend, UX design, User Testing, Fullstack, Development,Technical writing, hackathon, mobile app


interface Project {
    title: string;
    skills: string;
    date: string;
    img: string;
    url: string;
    tags: string[];
    description: string;
}

let p : Project[] = [
    {   
        title: 'Odyssey Mobile App',
        skills: 'React Native, Expo, AWS, TypeScript, JavaScript',
        date: 'Winter-Spring 2023',
        img: '/odysseyapppages.png',
        tags: ['backend', 'frontend', 'development', 'mobile', 'UX design', 'fullstack'],
        description: "A cross-platform mobile app dedicated to helping digital nomads plan their next adventure.",
        url: '/projects/odyssey'
    },
    {   
        title: 'AntMarket',
        skills: 'React Native, Expo, UX Design, TypeScript, JavaScript',
        date: 'Spring 2023',
        img: '/antmarketheader.png',
        tags: ['frontend', 'development', 'mobile', 'UX design', 'user testing'],
        description: "A mobile app for UCI students to easily sell, give away, and purchase items.",
        url: '/projects/antmarket'
    },
    {   
        title: 'Novel Widget: Five-Point Tracker',
        skills: 'TypeScript, JavaScript, SVG.js library',
        date: 'Spring 2023',
        img: '/novelwidget.png',
        tags: ['frontend', 'development'],
        description: "A five-point sentiment tracker, a novel widget created for a project course at UCI using SVG.js library.",
        url: '/'
    },
    {   
        title: 'Hack UCI 2023: SkinDeep',
        skills: 'React Native, Expo, UX Design, TypeScript, JavaScript, Firebase',
        date: 'Spring 2023',
        img: '/skindeepheader.png',
        tags: ['frontend', 'backend', 'fullstack', 'development', 'mobile', 'hackathon'],
        description: "A mobile app that facilitates community discussions around skin heatlh.",
        url: '/'
    },
    {   
        title: 'VenusHacks 2023: EmpowerNet',
        skills: 'React Native, Expo, UX Design, TypeScript, JavaScript',
        date: 'Spring 2023',
        img: '/empowernetheader.png',
        tags: ['frontend', 'development', 'mobile', 'UX design', 'hackathon'],
        description: "A mobile social networking and company-reviewing platform focused on empowering minority groups in tech.",
        url: '/'
    },
    // {   
    //     title: 'A Week of #Runkeeper Tweets',
    //     skills: 'TypeScript, JavaScript, Vega-Lite, HTML, Regular Expressions',
    //     date: 'Fall 2022',
    //     img: '/runkeeperimg.jpg',
    //     tags: ['backend', 'development'],
    //     description: "A TypeScript project that displays information on a week's worth of Tweets with '#Runkeeper'.",
    //     url: '/'
    // },
    {   
        title: 'Spotify Browser in Angular',
        skills: 'JavaScript, TypeScript, HTML, CSS, Bootstrap, Angular',
        date: 'Fall 2022',
        img: '/spotifyimg.jpg',
        tags: ['backend', 'frontend', 'development'],
        description: "Angular webapp that allows users to browse Spotify and view data on tracks, artists, and albums.",
        url: '/'
    },
    {   
        title: 'So You Want to Own a Food Truck?',
        skills: 'Research Project',
        date: 'Spring 2022',
        img: '/foodtruck.jpg',
        tags: ['Research'],
        description: "Sociotechnical ethnography on food trucks in the post-lockdown era of the pandemic.",
        url: '/',
    },
    {   
        title: 'Wildfire App Crisis Management Project',
        skills: 'UX Design, Figma, Research',
        date: 'Spring 2022',
        img: '/californiaimg.png',
        tags: ['Research', 'UX design'],
        description: "CSCW project focused on crisis management during California wildfires.",
        url: '/',
    },
    {   
        title: 'Kitchenova',
        skills: 'UX Design, Figma, Research',
        date: 'Spring 2022',
        img: '/cooking.jpg',
        tags: ['Research', 'UX design'],
        description: "A project in HCI that aimed to design a software system that encourages college students to cook more at home.",
        url: '/',
    }
]

const Projects = () => {
    let projects  : Project[] = p;
    const [menuOpen, setMenuOpen] = useState(true);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    const threshold = 1000; // Adjust the threshold as needed
    useEffect(() => {
      // Update windowWidth state on window resize
      const handleResize = () => {
        setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    useEffect(() => {
      // Automatically collapse the menu below a certain screen size
      const shouldMenuCollapse = windowWidth < threshold;
  
      if (shouldMenuCollapse && menuOpen) {
        setMenuOpen(false);
      }
    }, [windowWidth]);
  
    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };
    return(
        <>
            <Navvy selected='projects'/>
            <div className={styles.main} style={{backgroundColor: '#283b35', display: 'block' }}>
                <Container fluid className={styles.projectstitlecontainer}>
                    <div className={styles.titlecontainerdark}>
                        <h1 className={styles.pageletter2}>P</h1>
                        <h1 className={styles.pagetitle2}>
                            rojects
                        </h1>                  
                    </div>
                </Container>
                
                <Container fluid >
                    <div className={styles.projsubtitle}>
                        <p className={styles.projbodytext}>
                        {"Thanks for checking out my portfolio! Below are some of the software engineering and informatics projects I've completed during my studies at UC Irvine, hackathons, and professional career. "}
                        </p>
                    </div>
                    <Row>
                        <Col xs={2} sm={3}  md={2}>
                            {/* FILTERING MENU */}
                                <div style={{display: 'flex',justifyContent: 'center', alignSelf: 'center'}}>
                                    {/* Menu toggle button */}
                                    <button onClick={() => setMenuOpen(!menuOpen)} style={{display: windowWidth > threshold || typeof window === 'undefined' ? 'none' : 'block'}} className={styles.projmenubutton}>
                                            {menuOpen ? <FontAwesomeIcon icon={faX} style={{height: 'auto', width: '1em', color: '#416154', alignSelf: 'center'}}/> : <FontAwesomeIcon icon={faBarsStaggered} style={{height: 'auto', width: '1.5em', color: '#416154', alignSelf: 'center'}}/> }
                                        </button>
                                    <div className={styles.projmenu} style={{display: menuOpen || windowWidth > threshold ? 'block' : 'none'}}>
                                        <h2 className={styles.projmenutitle}>Filter</h2>
                                    </div>

                                </div>                                

                        </Col>

                        <Col xs={10} sm={9} md={10}>
                            {/* PROJECTS */}
                            <Row style={{marginRight: '2%'}}>
                                {projects.map((item, index) => {
                                    return(
                                        <Col key={index}  sm={12} md={6} xl={4}>
                                            <ProjectCard key={index} title={item.title} skills={item.skills} date={item.date} img={item.img} url={item.url} tags={item.tags} description={item.description}/>
                                        </Col>
                                    )
                                })}

                            </Row>
                        </Col>
                   
                    </Row>

                </Container>
            </div>

        </>
    )
}


const ProjectCard : React.FC<Project>  = ({title, skills, date, img, url, tags, description}) => {
    const bgimage = 'url(' + img + ')';
    return(
        <Link href={url} style={{textDecoration: 'none', color: 'black'}}>
            <div className={styles.projcard} style={{backgroundImage: bgimage, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                {/* <div className={styles.projimgcontainer}>
                    <img src={img} className={styles.projimg}/>
                </div> */}
                <div style={{minHeight: '12em', padding: '15px',  marginTop: '45%',backgroundColor: 'rgba(232, 237, 236, 0.9)', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px'}}>
                    <h1 className={styles.projecttitle}>{title}</h1> 
                    <h2 className={styles.projectskills}>{skills}</h2>
                    <p className={styles.projectdescription}>{description}</p>
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        {tags.map((item, index) => {return <Tag key={index} text={item}/>})}
                    </div>
                </div>
            </div>
        </Link>

    )
}

const Tag = (props:{ text: string}) => {
    return(
        <div style={{backgroundColor: 'rgb(217, 165, 113)', borderRadius:'10px', paddingLeft:'10px', paddingRight: '10px', justifyContent: 'center', height: '20px', marginRight: '5px', marginBottom: '5px'}}>
            <p style={{fontFamily: 'Silkscreen Reg', textAlign: 'center',fontSize: '9pt'}}>{props.text}</p>
        </div>
    )
}

// const FilterMenu = () => {
//     const [menuOpen, setMenuOpen] = useState(true);
//     const [windowWidth, setWindowWidth] = useState(
//         typeof window !== 'undefined' ? window.innerWidth : 0
//     );
//     const threshold = 768; // Adjust the threshold as needed
//     useEffect(() => {
//       // Update windowWidth state on window resize
//       const handleResize = () => {
//         setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
//       };
  
//       window.addEventListener('resize', handleResize);
  
//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }, []);
  
//     useEffect(() => {
//       // Automatically collapse the menu below a certain screen size
//       const shouldMenuCollapse = windowWidth < threshold;
  
//       if (shouldMenuCollapse && menuOpen) {
//         setMenuOpen(false);
//       }
//     }, [windowWidth]);
  
//     const handleMenuToggle = () => {
//       setMenuOpen(!menuOpen);
//     };
//     return(
//         <div>

//             {/* Menu toggle button */}
//             <button onClick={() => setMenuOpen(!menuOpen)} style={{display: windowWidth > threshold || typeof window === 'undefined' ? 'none' : 'block'}}>
//                 Toggle Menu
//             </button>
//             <div className={styles.projmenu} style={{display: menuOpen || windowWidth > threshold? 'block' : 'none'}}>
//                 <h2 className={styles.projmenutitle}>Filter</h2>
//             </div>

//         </div>
//     )
// }

export default Projects;