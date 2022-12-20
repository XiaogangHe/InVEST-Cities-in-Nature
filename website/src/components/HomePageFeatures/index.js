import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Code',
    Svg: require('../../../static/img/code.svg').default,
    description: (
      <>
        InVEST is an open source xxx.
        InVEST is an open source xxx.
        InVEST is an open source xxx.
        InVEST is an open source xxx.
        InVEST is an open source xxx.
      </>
    ),
  },
  {
    title: 'Studio Projects',
    Svg: require('../../../static/img/code-in-nature.svg').default,
    description: (
      <>
        You will use InVEST to xxx.
        You will use InVEST to xxx.
        You will use InVEST to xxx.
        You will use InVEST to xxx.
      </>
    ),
  },
  {
    title: 'Getting Started',
    Svg: require('../../../static/img/write.svg').default,
    description: (
      <>
        You will use InVEST to xxx.
        You will use InVEST to xxx.
        You will use InVEST to xxx.
        You will use InVEST to xxx.
      </>
    ),
  },
];

const Feature = ({ Svg, title, description }) => {
  return (
    <>
      <div className={clsx('col col--4', styles.featureRow)}>
        <div className={styles.featureImage}>
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className={styles.featureText}>
          <h2 className={styles.featureTitle}>{title}</h2>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </>
  );
};

const HomepageFeatures = () => {
  return (
    <>
      <h1 align="center">Dive Deeper into InVEST</h1>
      <section className={styles.features}>
        <div className="container">
          <div className="col">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageFeatures;
