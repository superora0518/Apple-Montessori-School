import type { NextPage } from 'next';
import type { CSSProperties } from 'react';

import Button from '@/components/common/Button';

import styles from './careers.module.css';

interface CareersGroup {
  className?: string;
  style?: CSSProperties;
}

const Careers: NextPage<CareersGroup> = ({ className = '', style = {} }) => {
  const data = {
    offerings: 'Summer Camp',
    price: '15',
    priceUnit: '$',
    rateUnit: 'Hour',
    tourType: 'Part Time',
    city: 'Randolph',
    state: 'NJ',
    tourId: 'asdfasdf',
  };

  const teacherAssistant = 'Teacher Assistant';

  return (
    <div
      className={`flex items-stretch justify-between p-6 ${className} ${styles['careers-main-container']}`}
      style={style}
    >
      <div className={`${styles['careers-body']}`}>
        <p className={`${styles['careers-introduction']}`}>
          {data.offerings} {teacherAssistant} {data.priceUnit} {data.price} Per{' '}
          {data.rateUnit}
        </p>
        <div className={`flex`}>
          <p className={`${styles['careers-tour-type']}`}>{data.tourType}</p>
          <p className={`${styles['careers-city-state']}`}>
            {data.city}, {data.state}
          </p>
        </div>
      </div>
      <Button style={{ padding: '11.5px 24px' }}>Apply</Button>
    </div>
  );
};

export default Careers;
