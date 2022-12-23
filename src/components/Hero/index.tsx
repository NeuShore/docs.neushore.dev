import React from "react"

import clsx from "clsx"
import AnchorLink from "react-anchor-link-smooth-scroll"

import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import screenshot from "@site/static/img/mockup.png"
// @ts-ignore
import Image from "@theme/IdealImage"

import styles from "./styles.module.scss"

const Hero = () => {
  const context = useDocusaurusContext()
  const { siteConfig } = context
  const { tagline, title } = siteConfig

  return (
    <header id="hero" className={clsx("hero", styles.banner)}>
      <div className="container">
        <img
          src={useBaseUrl(`img/brayanbot.png`)}
          alt="Logo"
          className={styles.logo}
        />

        <h1 className="hero__title">{title}</h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>{tagline}</p>

        <div className={styles.buttons}>
          <AnchorLink
            className={clsx("button button--primary button--lg", styles.button)}
            href="#download"
          >
            Get Started
          </AnchorLink>
        </div>
      </div>

      <Image img={screenshot} className={clsx("shadow-md", styles.image)} />
    </header>
  )
}

export default Hero
