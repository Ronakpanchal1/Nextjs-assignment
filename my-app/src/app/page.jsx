
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import Hero from "public/heroImg.jpg";
export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
        Let the right people know you are open to work
        </h1>
        <p className={styles.desc}>
        Apply on the Go!<br/>
       Get a seamless job hunting experience
        </p>
        
        <Link href="/findJobs" className={styles.button}>Find Jobs</Link>
      </div>
      <div className={styles.item}>
        <Image src={Hero}  alt="hero section" className={styles.img} />
      </div>
    </div>
  )
}
