import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';

const Home = ()=> {
  return (
    <main className={styles.main} style={{ backgroundImage: `url("/bgimgsparkles.png")`, backgroundSize: 'cover', width: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <img className={styles.northstar} src={"/star.png"} alt="Star graphic"/>
      <div className={styles.headercontainer}>
        <h1 className={styles.headerletter}>E</h1>
        <h1 className={styles.headertitle}>
          {"ll\'s info dot com"}
          <span className={styles.butterflying}>
           <img className={styles.butterfly} src={"butterfly.png"} alt="Butterfly graphic"/>
          </span>
        </h1>
      </div>
      <div className={styles.frontpagemenu}>
        <MenuItem id="about" image="about.png" name="about"/>
        <MenuItem id="projects" image="projects.png" name="projects"/>
        <MenuItem id="contact" image="contact.png" name="build with me"/>
      </div>
      <div className={styles.subheadingcontainer}>
        <h2 className={styles.subheading}>developer + designer</h2>
        <h3 className={styles.subheading2}>technology for a brighter tomorrow</h3>
      </div>
    </main>
  )
};

interface MenuItemProps {
  id: string;
  image: string;
  name: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, image, name })=> {
  
  return(
    <div id={id} className={styles.unhhhh} style={{marginLeft: '4%', marginRight: '4%', alignContent: 'center', textAlign: 'center'}}>
      <div className={styles.outerglow}>
        <div className={styles.itemcontainer}>
          <img src={image} alt={name} className={styles.circularitem}/>
        </div>        
      </div>

      <p className={styles.menutitle}>{name}</p>
    </div>
  
  )
}


export default Home;
