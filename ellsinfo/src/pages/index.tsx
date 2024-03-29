import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Head>
        <title>{"Ell's Info"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{ backgroundImage: `url("/bgimgsparkles.png")`, backgroundSize: 'cover', width: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#A86276'}}>
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
          <Link href="/about" style={{textDecoration: 'none', marginLeft: '4%', marginRight: '4%', alignContent: 'center', textAlign: 'center'}}>
            <MenuItem id="about" image="about.png" name="about"/>
          </Link>
          <Link href="/projects" style={{textDecoration: 'none', marginLeft: '4%', marginRight: '4%', alignContent: 'center', textAlign: 'center'}}>
            <MenuItem id="projects" image="projects.png" name="projects"/>
          </Link>
          <Link href="/buildwithme" style={{textDecoration: 'none', marginLeft: '4%', marginRight: '4%', alignContent: 'center', textAlign: 'center'}}>
            <MenuItem id="contact" image="contact.png" name="build with me"/>
          </Link>
        </div>
        <div className={styles.subheadingcontainer}>
          <h2 className={styles.subheading}>developer + designer</h2>
          <h3 className={styles.subheading2}>technology for a brighter tomorrow</h3>
        </div>
      </main>
    </>
  )
}

interface MenuItemProps {
  id: string;
  image: string;
  name: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, image, name })=> {
  
  return(
    <div id={id} className={styles.unhhhh} style={{alignContent: 'center', textAlign: 'center'}}>
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