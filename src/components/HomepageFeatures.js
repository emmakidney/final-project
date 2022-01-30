import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Equality',
    Svg: require('../../static/img/globe-svgrepo-com.svg').default,
    description: (
      <>
       It is essential that the Web be accessible in order to provide equal access 
       and equal opportunity to people with diverse abilities.
      </>
    ),
  },
  {
    title: 'Accessibility',
    Svg: require('../../static/img/puzzle-svgrepo-com.svg').default,
    description: (
      <>
        Web Accessibility is a practice that allows the Web to be used by people 
        with a wide range of hearing, movement, sight, and cognitive ability.
      </>
    ),
  },
  {
    title: 'Consideration',
    Svg: require('../../static/img/window-layout-svgrepo-com.svg').default,
    description: (
      <>
       To guarantee the accessibility of websites, one must ensure that they are 
       compatible with commonly used input and output tools (software and/or devices).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
