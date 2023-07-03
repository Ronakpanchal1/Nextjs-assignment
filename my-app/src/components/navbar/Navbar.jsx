import Link from 'next/link'
import React from 'react'
import styles from '@/components/navbar/navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Linked Inn</Link>
        <div className={styles.links}>
            <Link href="/findJobs" className={styles.link}>Find Jobs</Link>
        </div>
        
    </div>
  )
}

export default Navbar