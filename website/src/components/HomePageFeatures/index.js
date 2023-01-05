import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Value of Nature',
    Svg: require('../../../static/img/investing-in-nature.svg').default,
    description: (
      <>
        Put a price tag on Nature.  
        <br />
        Incorporate ecosystem services into decision-making. 
      </>
    ),
  },
  {
    title: 'Studio Projects',
    Svg: require('../../../static/img/holding-the-arrow.svg').default,
    description: (
      <>
        Problem-driven case studies. 
        <br />
        Role-play different stakeholders. 
      </>
    ),
  },
  {
    title: 'Actionable Insights',
    Svg: require('../../../static/img/code-in-nature.svg').default,
    description: (
      <>
        Use InVEST to do powerful analytics. 
        <br />
        Actionable numbers facilitate effective decision making. 
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
      <h1 align="center">Harnessing Nature to Design Resilient Cities</h1>
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
