import React from "react"

import clsx from "clsx"

import Headline from "@site/src/components/Headline"

import styles from "./styles.module.scss"

interface Feature {
  title: string
  description: string
}

const data: Feature[] = [
  {
    title: "DiscordJS v13",
    description:
      "All DiscordJS v13 features such as Buttons and Lists are already built in!",
  },
  {
    title: "Blazing Fast!",
    description: "No unnecessary packages or dependencies! Doesn't get any more lightweight.",
  },
  {
    title: "Easy to Customize",
    description: "Every message is customizable. Change them all you want!",
  },
  {
    title: "Cross-Platform",
    description:
      "ARM, Linux, MacOS, Windows... Inside Docker or on Pterodactyl. We support all of them!",
  },
  {
    title: "Extensible and un-opinionated",
    description: "No hard-coded commands and features! Everything is added through Addons.",
  },
  {
    title: "Easy Installation",
    description:
      "Installation too complicated? No worries, try the installation script!",
  },
]

const Feature = ({ title, description }: Feature) => {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <Headline
          category="Features"
          title="Manage your Discord server with ease."
          offset={1}
        />

        <div className="row">
          {data.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
