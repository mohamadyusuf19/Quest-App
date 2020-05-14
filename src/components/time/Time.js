import React from 'react';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import './time.scss';

const Time = ({ jam, menit, detik, review }) => {
  const condition = (params) => {
    if (isNil(params)) {
      return '00';
    } else if (params < 10) {
      return '0' + params;
    } else {
      return params;
    }
  };

  const styleTime = (params) => {
    if (isEmpty(params)) {
      return 'digital-timer';
    } else if (params < 30) {
      return 'digital-timer red';
    } else {
      return 'digital-timer';
    }
  };

  return (
    <div className={styleTime(detik)}>
      {review ? (
        <p>Review</p>
      ) : (
        <p>
          {condition(jam)}:{condition(menit)}:{condition(detik)}
        </p>
      )}
    </div>
  );
};

export default Time;
