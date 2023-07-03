"use client"
import React from 'react'
import styles from '@/app/jobApplication/page.module.css'
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const JobApplication = () => {

    const formSchema = z.object({
        name: z.string().min(2).max(30),
        email: z.string().email(),
        location: z.string().min(3),
        letter: z.string().min(5),
        salary: z.number()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(formSchema) })

    const submitData = (data) => {
        console.log("It Worked", data)
    }

    return (
        <div className={styles.jobApplication}>
            <form onSubmit={handleSubmit(submitData)}>
                <label htmlFor="name">Name</label>
                <input className={styles.inputText} type="text" id="name" name="name" placeholder="Your name.." {...register("name")} />
                {errors.name && <div className={styles.errors}>{errors.name.message}</div>}

                <label htmlFor="email">Email</label>
                <input className={styles.inputText} type="text" id="email" name="email" placeholder="Your Email address.."  {...register("email")} />
                {errors.email && <div className={styles.errors}>{errors.email.message}</div>}


                <label htmlFor="location">Location</label>
                <input className={styles.inputText} type="text" id="location" name="location" placeholder="Your Location"  {...register("location")} />
                {errors.location && <div className={styles.errors}>{errors.location.message}</div>}


                <label htmlFor="letter">Cover Letter</label>
                <textarea className={styles.inputText} type="text" id="letter" name="letter" placeholder="Enter text here..." {...register("letter")} />
                {errors.letter && <div className={styles.errors}>{errors.letter.message}</div>}


                <label htmlFor="salary">Expected CTC in LPA</label>
                <input className={styles.inputText} type="text" id="salary" name="salary" placeholder="Expected CTC" {...register("salary", { valueAsNumber: true })} />
                {errors.salary && <div className={styles.errors}>{errors.salary.message}</div>}


                <label htmlFor="fileUpload" className={styles.uploadFile}>Select Resume File</label>
                <input type='file' style={{ display: "none" }} id="fileUpload" />

                <input type="submit"  className={styles.uploadFile}/>
            </form>


        </div>
    )
}

export default JobApplication