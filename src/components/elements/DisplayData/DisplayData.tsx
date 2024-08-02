
import { MTGCardProps } from '@/types/types';
import React from 'react';
import styles from './_DisplayData.module.scss'

const DisplayData = ({ data }: { data: MTGCardProps[] | undefined }) => {
  if (!data) {return <></>};

  return (
    <div className={styles['typewriter']}>
      <p style={{ overflowWrap:'anywhere' }}>
        {JSON.stringify(data)}
      </p>
    </div>
  );
};

export default DisplayData;
