import React from "react";
import Link from "@docusaurus/Link";

import styles from "./styles.module.scss";

const data = [
  {
    title: <>What is BrayanBot?</>,
    description: (
      <>
        BrayanBot is a Discord bot written against DiscordJS V13, aiming to be as 
        unopinionated as possible while providing the best possible service.
      </>
    ),
  },
  {
    title: <>Why use BrayanBot?</>,
    description: (
      <>
        BrayanBot is open source, self-hosted and easily customizable; unlike most 
        public bots you can add to your server. We offer a robust addon handler for
        first and third party developers to easily create their own addons to extend
        BrayanBot's functionality.
      </>
    ),
  },
  {
    title: <>Is BrayanBot fast?</>,
    description: (
      <>
        Yes, BrayanBot provides only the essential NPM packages out of the box, being
        as lightweight as possible.
      </>
    ),
  },
  {
    title: <>How may extend BrayanBot's functionality?</>,
    description: (
      <>
        You may <Link to="docs/Developers/Addons/creating-addons">create your own addons</Link> or 
        <Link to="docs/Developers/Addons/third-party">install more addons</Link> 
        to add more commands and features to BrayanBot. 
        We offer a guide to developing your own addons,
        additionally you may get in touch with our verified Community Developers to
        purchase commissioned addons.
      </>
    ),
  },
];

function Question({ title, description }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FAQ() {
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
        </div>
      </div>
    </section>
  );
}

export default FAQ;
