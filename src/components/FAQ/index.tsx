import React from "react"
import { ReactElement } from "react"

import Link from "@docusaurus/Link"

import styles from "./styles.module.scss"

interface Question {
  title: string
  description: ReactElement
}

const data: Question[] = [
  {
    title: "What is BrayanBot?",
    description: (
      <>
        BrayanBot is a modern Discord bot written with latest DiscordJS features in mind
        that provide an easy-to-use ecosystem for developers and a robust bot base for Server Owners.
      </>
    ),
  },
  {
    title: "Why choose BrayanBot?",
    description: (
      <>
        BrayanBot is open source, self-hosted and easily customizable; 
        unlike most public bots you can add to your server. 
        We offer a robust addon handler for first and third party developers 
        to easily create their own addons to extend 
        BrayanBot's functionality.
      </>
    ),
  },
  {
    title: "Is BrayanBot Fast?",
    description: (
      <>
        Yes, BrayanBot provides only the essential NPM packages out of the box, 
        being as lightweight as possible. Should you need extra packages for 
        downloaded addons, we also provide a built-in module installer!
      </>
    ),
  },
  {
    title: "How May I Extend BrayanBot' functionality?",
    description: (
      <>
        You may create your own addons or install more addons to add more commands 
        and features to BrayanBot. We offer a guide to developing your own addons, 
        additionally and you may get in touch with our verified Community Developers 
        to commission special addons for private use.
      </>
    ),
  },
  {
    title: "How may I Contribute to BrayanBot?",
    description: (
      <>
        We welcome all kinds of contributions from all kinds of people. 
        If you are interested in helping build the future of BrayanBot, or just 
        looking to support or continued efforts;  you may support us in any way 
        that you feel confident in. Graphics, code,  documentation, translations, 
        donations and other contributions are all welcome!
      </>
    ),
  },
  {
    title: "Is BrayanBot Secure?",
    description: (
      <>
        BrayanBot is safe to use, secure, open-source and actively maintained.
        All public addons by our verified Community Developers are verified before they
        are released for public use. We also audit our code to avoid dependency-caused 
        vulnerabilities.
      </>
    ),
  },
]

const Question = ({ title, description }: Question) => {
  return (
    <div className={styles.question}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            {data[0] && <Question {...data[0]} />}
            {data[1] && <Question {...data[1]} />}
          </div>

          <div className="col col--6">
            {data[2] && <Question {...data[2]} />}
            {data[3] && <Question {...data[3]} />}
          </div>

          <div className="col col--6">
            {data[4] && <Question {...data[4]} />}
            {data[5] && <Question {...data[5]} />}
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default FAQ
