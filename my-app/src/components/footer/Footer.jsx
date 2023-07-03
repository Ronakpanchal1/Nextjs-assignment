import React from 'react'
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>&copy; Linked Inn. All rights reserved</div>
        <div className={styles.social}>
        <Image src="/facebook.png" width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />
        <Image src="/instagram.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/twitter.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/youtube.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
      </div>
    </div>
  )
}

export default Footer