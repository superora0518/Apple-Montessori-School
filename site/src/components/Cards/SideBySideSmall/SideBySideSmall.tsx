import type { NextPage } from 'next';
import type { CSSProperties } from 'react';

import styles from './side.by.side.small.module.css';

interface SideBySideSmallGroup {
  className?: string;
  style?: CSSProperties;
}

const SideBySideSmall: NextPage<SideBySideSmallGroup> = ({
  className = '',
  style = {},
}) => {
  const data = {
    title: 'History',
    description:
      'Learning through the study of human accomplishment. The focus is on culture, government, arts, invention, medicine, economics and modern progress. Students gain respect for how nature will support life for generations to come.',
  };

  return (
    <div className={`flex items-stretch ${className}`} style={style}>
      <div className={`${styles['image-container']}`} />
      <div className={`${styles['body-container']}`}>
        <h2 className={styles['side-title']}>{`${data.title}`}</h2>
        <h2 className={styles['side-description']}>{`${data.description}`}</h2>
      </div>
    </div>
  );
};

export default SideBySideSmall;
