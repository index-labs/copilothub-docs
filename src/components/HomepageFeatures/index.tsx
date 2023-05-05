import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
   title: string;
   Svg: React.ComponentType<React.ComponentProps<'svg'>>;
   description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
   {
      title: 'Easy to Use',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
         <>
            Copilot Hub is built for everyone. Whether you have any AI/Coding
            background or not, you can create and make use of powerful AI here.
         </>
      ),
   },
   {
      title: 'Place to Explore',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
         <>
            Copilot Hub has thousands of public Copilot on different domains.
            Users can easily explore and find the one you want in minutes.
         </>
      ),
   },
   //  {
   //     title: 'Powered by React',
   //     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
   //     description: (
   //        <>
   //           Extend or customize your website layout by reusing React. Docusaurus
   //           can be extended while reusing the same header and footer.
   //        </>
   //     ),
   //  },
];

function Feature({ title, Svg, description }: FeatureItem) {
   return (
      <div className={clsx('col col--4')}>
         <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
         </div>
         <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
         </div>
      </div>
   );
}

export default function HomepageFeatures(): JSX.Element {
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
