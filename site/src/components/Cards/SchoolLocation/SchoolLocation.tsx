import type { NextPage } from 'next';
import type { CSSProperties } from 'react';

import Button from '@/components/common/Button';
import { ButtonTypes } from '@/components/common/Button/Button';
import { formatDate, formatPhoneNumber, string2Date } from '@/utils/utils';

import styles from './school.location.module.css';

interface SchoolLocationGroup {
  className?: string;
  style?: CSSProperties;
}

const SchoolLocation: NextPage<SchoolLocationGroup> = ({
  className = '',
  style = {},
}) => {
  const data = {
    slugLocation: 'cliffside-park',
    name: 'Cliffside Park',
    offerings: [
      'Toddler',
      'Preschool',
      'Kindergarten',
      'Summer Camps',
      'Before & After Care',
    ],
    description:
      'Situated in a quiet residential community. Walking distance to surrounding neighborhoods and public transportation.\nIndividual toddler and preschool playgrounds with safety turf and dedicated spaces for enrichment programs.',
    ages: {
      fromAge: {
        fromAgeUnit: 'Months',
        fromAgeValue: 18,
      },
      toAge: {
        toAgeUnit: 'Years',
        toAgeValue: 6,
      },
    },
    serves: [
      {
        name: 'Cliffside Park',
      },
      {
        name: 'Fairview',
      },
      {
        name: 'Fork Lee',
      },
      {
        name: 'North Bergen',
      },
      {
        name: 'West New York',
      },
    ],
    hours: {
      fromHour: '07:00',
      toHour: '18:30',
    },
    schoolDayHours: {
      fromHour: '08:30',
      toHour: '15:30',
    },
    address: {
      street: '600 Gorge Rd',
      city: 'Cliffside Park',
      state: 'NJ',
      postalCode: '07010',
    },
    phone: ['2018401703', '2018401703'],
    tourId: 'asdfasdf',
    enrollLink: 'asdfasdf',
  };

  const drawItem = (refer: string, value: string, classname: string = '') => (
    <p className={`${styles['school-location-draw-item']} ${classname}`}>
      <b>{refer}:</b> {value}
    </p>
  );

  return (
    <div className={`flex items-stretch ${className}`} style={style}>
      <div className={`${styles['image-container']}`} />
      <div className={`${styles['body-container']} p-8`}>
        <h2
          className={styles['school-location-name']}
        >{`${data.name} Preschool & Daycare`}</h2>
        <p className={styles['school-location-offerings']}>
          {data.offerings.reduce(
            (prev, value, index) => `${prev}${index ? ` | ` : ''}${value}`,
            ''
          )}
        </p>
        <p className={styles['school-location-description']}>
          {data.description}
        </p>
        {drawItem(
          'Ages',
          `${data.ages.fromAge.fromAgeValue} ${data.ages.fromAge.fromAgeUnit} to ${data.ages.toAge.toAgeValue} ${data.ages.toAge.toAgeUnit}`
        )}
        {drawItem(
          'Serves',
          data.serves.reduce(
            (prev, value, index) => `${prev}${index ? `, ` : ``}${value.name}`,
            ''
          )
        )}
        {drawItem(
          'Hours',
          `${formatDate(
            string2Date(data.hours.fromHour),
            'hh:mm tt'
          )} - ${formatDate(
            string2Date(data.hours.toHour),
            'hh:mm tt'
          )} (school day is ${formatDate(
            string2Date(data.schoolDayHours.fromHour),
            'hh:mm tt'
          )} - ${formatDate(
            string2Date(data.schoolDayHours.toHour),
            'hh:mm tt'
          )})`
        )}
        {drawItem(
          'Address',
          `${data.address.street}, ${data.address.city}, ${data.address.state} ${data.address.postalCode}`
        )}
        {drawItem(
          'Phone',
          data.phone.reduce(
            (prev, value, index) =>
              `${prev}${index ? ', ' : ''}${formatPhoneNumber(value)}`,
            ''
          ),
          `${styles['phone-item']}`
        )}
        <div className={`${styles['button-list']}`}>
          <Button
            className={`${styles['button-list-item']}`}
            type={ButtonTypes.PRIMARY}
            round={true}
          >
            Schedule a tour
          </Button>
          <Button className={`${styles['button-list-item']}`}>
            Request more info
          </Button>
          <Button className={`${styles['button-list-item']}`}>Enroll</Button>
        </div>
      </div>
    </div>
  );
};

export default SchoolLocation;
