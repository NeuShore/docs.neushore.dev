import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


const FeatureList = [
  {
    title: 'Easy to Customize',
    image: require('@site/static/img/customizable.png').default,
    description: (
      <>
        BrayanBot was designed from the ground up to be easily installed and
        configured to your liking for your discord server, while also providing utilities for developers to create addons!
      </>
    ),
  },
  {
    title: 'Open Source',
    image: require('@site/static/img/open-source.png').default,
    description: (
      <>
        BrayanBot is designed from the ground up with the goal of open source in mind.
        No more paying for a fully customizable discord bot!
      </>
    ),
  },
  {
    title: 'Up to Date',
    image: require('@site/static/img/updated.png').default,
    description: (
      <>
        BrayanBot Uses the most up to date technologies, 
        allowing you to create slash commands, buttons, and menus!
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img width="1009.54" height="717.96" src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
