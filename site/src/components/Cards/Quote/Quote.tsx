import type { NextPage } from 'next';
import Image from 'next/image';
import type { CSSProperties } from 'react';

import styles from './quote.module.css';

interface QuoteGroup {
  className?: string;
  style?: CSSProperties;
}

const Quote: NextPage<QuoteGroup> = ({ className = '', style = {} }) => {
  const data = {
    content:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit in rutrum mauris ac nibh parturient ultrices turpis vel vehicula etiam sodales potenti hac duis libero vitae neque fermentum',
    author: 'Tammi Falco',
    image:
      'data:image/jpeg;base64,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',
    parent: 'Apple parent of 5 year old',
  };

  return (
    <div className={`flex items-stretch ${className}`} style={style}>
      <div className={styles.quote}>
        <h2 className={styles['quote-content']}>{`${data.content}`}</h2>
        <div className={`flex items-center`}>
          <Image
            alt="Author Avatar"
            src={data.image}
            width={48}
            height={48}
            style={{ borderRadius: '100%' }}
          />
          <div className={`flex-auto ml-4`}>
            <p className={styles['quote-author']}>{`${data.author}`}</p>
            <p className={styles['quote-parent']}>{`${data.parent}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
