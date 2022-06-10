import type { NextPage } from 'next';
import type { CSSProperties } from 'react';

import Button from '@/components/common/Button';
import { ButtonTypes } from '@/components/common/Button/Button';
import Checkbox from '@/components/common/Checkbox';
import { CheckboxTypes } from '@/components/common/Checkbox/Checkbox';

import styles from './programs.module.css';

interface ProgramsGroup {
  className?: string;
  style?: CSSProperties;
}

const Programs: NextPage<ProgramsGroup> = ({ className = '', style = {} }) => {
  const data = {
    slugLocation: 'infant',
    name: 'Infant',
    ages: {
      fromAge: {
        fromAgeUnit: 'weeks',
        fromAgeValue: 6,
      },
      toAge: {
        toAgeUnit: 'months',
        toAgeValue: 18,
      },
    },
    description:
      'Phasellus magana elit, consequat nec ligula ac, dapibus iaculis libbero. Pellentesque eget leo mi. Aliquam ut imperdiet turpis, quis finibus lacus. Donec faucibus erat a diam bibendum, sit amet tempus elit aliquam. Nulla facilisi. Sed suscipit, nisl id scelerisque lobortis, ligula ipsum faucibus est, non convallis felis lectus vel urna.',
    focuses: [
      {
        name: 'Health & Safety',
      },
      {
        name: 'Independence',
      },
      {
        name: 'love & Security',
      },
      {
        name: 'Parent communication',
      },
      {
        name: 'Social Interaction',
      },
      {
        name: 'Freedom of movement',
      },
      {
        name: 'Daily individual lessons',
      },
      {
        name: 'Respect for child',
      },
    ],
    tourId: 'asdfasdf',
  };

  const subject = 'Nurturing and encouraging caregivers';

  return (
    <div className={`flex items-stretch ${className}`} style={style}>
      <div className={`${styles['image-container']}`} />
      <div className={`${styles['body-container']} p-8`}>
        <h2 className={`${styles['program-name']}`}>{`${data.name}`}</h2>
        <p className={`${styles['program-ages']}`}>
          {data.ages.fromAge.fromAgeValue} {data.ages.fromAge.fromAgeUnit} to
          {data.ages.toAge.toAgeValue} {data.ages.toAge.toAgeUnit}
        </p>
        <h4 className={`${styles['program-subject']}`}>{subject}</h4>
        <p className={`${styles['program-description']}`}>{data.description}</p>
        <h4 className={`${styles['focuses-title']}`}>{`With a focus on:`}</h4>
        <div className={`mb-10 grid grid-cols-2 content-start gap-y-5`}>
          {data.focuses.map((value, index) => (
            <div
              key={index}
              className={`flex items-center ${styles['focuses-item']}`}
            >
              <div className={`${styles['check-icon']}`}>
                <Checkbox type={CheckboxTypes.SUCCESS} status={true} />
              </div>
              {value.name}
            </div>
          ))}
        </div>
        <div className={`${styles['button-list']}`}>
          <Button
            className={`${styles['button-list-item']}`}
            type={ButtonTypes.PRIMARY}
            round={true}
          >
            Schedule a tour
          </Button>
          <Button className={`${styles['button-list-item']}`}>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
