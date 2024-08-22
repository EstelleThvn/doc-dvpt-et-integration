import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Consolider et approfondir',
    Svg: require('@site/static/img/link.svg').default,
    description: (
      <>
        les notions de base du développement en Javascript
      </>
    ),
  },
  {
    title: 'Syntaxe ES6+',
    Svg: require('@site/static/img/checkmark.svg').default,
    description: (
      <>
        Apprendre à utiliser une syntaxe Javascript moderne dans ses projets
      </>
    ),
  },
  {
    title: 'Profils dev & créa',
    Svg: require('@site/static/img/project.svg').default,
    description: (
      <>
        Donner des pistes à chaque profil pour mettre en œuvre des projets web plus riches
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
