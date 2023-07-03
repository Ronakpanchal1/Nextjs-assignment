import React from 'react'
import styles from "@/app/findJobs/page.module.css"
import Image from 'next/image'
import Link from 'next/link'

const FindJobs = () => {

  const data = [
    {
      "id": 1,
      "title": "Web Designer",
      "company": "Gemini india",
      "location": "Remote",
      "experience": "2 - 5 Yrs",
      "salary": "2,800,000 - 4,20,000 PA"
    },
    {
      "id": 2,
      "title": ".Net Developer",
      "company": "Cognizant",
      "location": "Ahmedabad",
      "experience": "3+ Yrs",
      "salary": "2,800,000 - 3,40,000 PA"
    },
    {
      "id": 3,
      "title": "Sr. Associate - Projects",
      "company": "Cognizant",
      "location": "Hyderabad",
      "experience": "6+ Yrs",
      "salary": "8,500,000 - 9,50,000 PA"
    },
    {
      "id": 4,
      "title": "Software engineer",
      "company": "Indee Software",
      "location": "Mumbai",
      "experience": "0 - 2 Yrs",
      "salary": "2,00,000 - 2,80,000 PA"
    },
    {
      "id": 5,
      "title": "Flutter Developer",
      "company": "Techlabs Solutions",
      "location": "Noida",
      "experience": "0 - 2 Yrs",
      "salary": "1,800,000 - 2,60,000 PA"
    },
    {
      "id": 6,
      "title": "React Native Developer",
      "company": "Blue Prism Solutions",
      "location": "Banglore",
      "experience": "0 - 2 Yrs",
      "salary": "2,800,000 - 3,20,000 PA"
    },
  ]

  return (
    <div className={styles.FindJobs}>

      {data.map((item) => {
        return <div  key={item.id} todo="dark">
          <Link href={`/findJobs/${item.id}`} className={styles.jobCard}>
          <h2  className={styles.title}>{item.title} </h2>
          <h3 className={styles.company}>{item.company}</h3>
          <div className={styles.iconWrap}>
            <div className={styles.icons}>
              <Image src="/location.png" width={15} height={15} className={styles.icon} alt='icons' /> <span className={styles.loc}>{item.location}</span>
            </div>
            <div className={styles.icons}>
              <Image src="/expicon.png" width={15} height={15} className={styles.icon} alt='icons' /> <span className={styles.loc}>{item.experience}</span>
            </div>
          </div>
          <div className={styles.icons}>
            <Image src="/rupee.png" width={15} height={18} className={styles.icon} alt='icons' /> <span className={styles.salary}>{item.salary}</span>
          </div>
          </Link>
        </div>
      })}


    </div>
  )
}

export default FindJobs 