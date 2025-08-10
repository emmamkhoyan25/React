import React from 'react'
import { classes } from "../../utist"
import styles from "./About.module.scss"
const About = () => {
    return (
        <div className={classes(styles.about, "container")}>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veniam, exercitationem consequuntur alias soluta minus iste eius laudantium blanditiis incidunt quaerat labore perspiciatis voluptas! Earum porro ullam sed nihil veritatis!</p>
            <div className={classes(styles.about_img)}>
                <img src="https://media.istockphoto.com/id/2012883461/photo/ai-data-analysis-business-people-use-ai-to-analyze-financial-related-data-big-data-complex.jpg?s=612x612&w=0&k=20&c=NZBUJZH4jYmMPPPJX24UuAzQqucgiLKuVkMIxglvfXY=" alt="" />
                <img src="https://media.istockphoto.com/id/2012883461/photo/ai-data-analysis-business-people-use-ai-to-analyze-financial-related-data-big-data-complex.jpg?s=612x612&w=0&k=20&c=NZBUJZH4jYmMPPPJX24UuAzQqucgiLKuVkMIxglvfXY=" alt="" />
                <img src="https://media.istockphoto.com/id/2012883461/photo/ai-data-analysis-business-people-use-ai-to-analyze-financial-related-data-big-data-complex.jpg?s=612x612&w=0&k=20&c=NZBUJZH4jYmMPPPJX24UuAzQqucgiLKuVkMIxglvfXY=" alt="" />
                <img src="https://media.istockphoto.com/id/2012883461/photo/ai-data-analysis-business-people-use-ai-to-analyze-financial-related-data-big-data-complex.jpg?s=612x612&w=0&k=20&c=NZBUJZH4jYmMPPPJX24UuAzQqucgiLKuVkMIxglvfXY=" alt="" />
            </div>

        </div>
    )
}

export default About