import React from 'react'
import styles from '@/app/findJobs/[id]/page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const jobDetails = ({ params }) => {
  return (
    <div className={styles.jobDetails}>
      <div className={styles.sections}>
        <h2 className={styles.title}>Sr. Associate - Projects</h2>
        <h3 className={styles.company}>Cognizant</h3>
        <div className={styles.iconWrap}>
          <div className={styles.icons}>
            <Image src="/location.png" width={15} height={15} className={styles.icon} alt='icons' /> <span className={styles.loc}>Hyderabad</span>
          </div>
          <div className={styles.icons}>
            <Image src="/expicon.png" width={15} height={15} className={styles.icon} alt='icons' /> <span className={styles.loc}>5 Yrs</span>
          </div>
        </div>
        <div className={styles.icons}>
          <Image src="/rupee.png" width={15} height={18} className={styles.icon} alt='icons' /> <span className={styles.salary}>5,00,000</span>
        </div>
        <div className={styles.skills}>
          <h3>Skills</h3>
          <p>Reactjs, Nodejs, mongodb, Javascript, HTML, CSS, Nextjs</p>
        </div>
      </div>
      <div className={styles.sections}>
        <h2 className={styles.desc}>Job description</h2>
        <div className={styles.detailSection}>
        <h3>About Company </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus tempore molestiae dolorem. Officia, amet tenetur aut tempore esse suscipit minus. Velit saepe praesentium esse doloremque accusantium eveniet sint, assumenda enim sed excepturi pariatur reiciendis ad quisquam sapiente distinctio voluptatum in numquam error harum quam! Eius eum dolor veritatis possimus voluptatum.
        </p>
        </div>
        <div className={styles.detailSection}>
        <h3>Your responsiblities</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus tempore molestiae dolorem. Officia, amet tenetur aut tempore esse suscipit minus. Velit saepe praesentium esse doloremque accusantium eveniet sint, assumenda enim sed excepturi pariatur reiciendis ad quisquam sapiente distinctio voluptatum in numquam error harum quam! Eius eum dolor veritatis possimus voluptatum.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus tempore molestiae dolorem. Officia, amet tenetur aut tempore esse suscipit minus. Velit saepe praesentium esse doloremque accusantium eveniet sint, assumenda enim sed excepturi pariatur reiciendis ad quisquam sapiente distinctio voluptatum in numquam error harum quam! Eius eum dolor veritatis possimus voluptatum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus tempore molestiae dolorem. Officia, amet tenetur aut tempore esse suscipit minus. Velit saepe praesentium esse doloremque accusantium eveniet sint, assumenda enim sed excepturi pariatur reiciendis ad quisquam sapiente distinctio voluptatum in numquam error harum quam! Eius eum dolor veritatis possimus voluptatum.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus tempore molestiae dolorem. Officia, amet tenetur aut tempore esse suscipit minus. Velit saepe praesentium esse doloremque accusantium eveniet sint, assumenda enim sed excepturi pariatur reiciendis ad quisquam sapiente distinctio voluptatum in numquam error harum quam! Eius eum dolor veritatis possimus voluptatum.
        </p>
        </div>
        <div className={styles.detailSection}>
        <h3>Perks and Benefits</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus tempore molestiae dolorem. Officia, amet  Velit saepe praesentium distinctio voluptatum in numquam error harum quam! Eius eum dolor veritatis possimus voluptatum.
        </p>
        </div>
      </div>
      <div className={styles.sections}>
        <Link href='/jobApplication' className={styles.buttons}>Apply Now</Link>
        <Link href='/findJobs' className={styles.buttons}>Read more about company</Link>

      </div>
    </div>
  )
}

export default jobDetails