import React from 'react';
import './content.scss';
import Button from '../button/Button';
import Sidebar from '../sidebar/Sidebar';
import Time from '../time/Time';

const Content = ({
  pilihan,
  pertanyaan,
  nomor,
  onChangeChoices,
  checked,
  to,
  onClickSoal,
  data,
  onClickSidebar,
  existenceAnswer,
  page,
  jam,
  menit,
  detik,
  review,
}) => {
  return (
    <div className='flex'>
      <div className='card'>
        <p className='question'>
          {nomor}. {pertanyaan}
        </p>
        {console.log(data[nomor - 1].value)}
        {pilihan.map((item, i) => (
          <div key={i} className='choices'>
            <input
              type='radio'
              value={item.key}
              checked={
                !review
                  ? checked === item.key
                  : data[nomor - 1].value === item.key
              }
              onChange={() => onChangeChoices(item.key)}
            />
            <p className='value'>
              {item.key}. {item.value}
            </p>
          </div>
        ))}
        <Button
          to={to}
          onClickSoal={onClickSoal}
          buttonText={page === data.length ? 'Selesai' : 'Berikutnya'}
        />
      </div>
      <div className='right-side'>
        {!review ? (
          <Time jam={jam} menit={menit} detik={detik} />
        ) : (
          <Time review />
        )}
        <Sidebar
          data={data}
          onClickSoal={(item) => onClickSidebar(item)}
          existenceAnswer={existenceAnswer}
        />
      </div>
    </div>
  );
};

export default Content;
