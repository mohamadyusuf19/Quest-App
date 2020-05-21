import React, { useContext } from 'react';
import './home.scss';
import Button from '../button/Button';
import { AuthContext } from '../../auth/AuthContext';
const images = require('../../assets/learning.png');

const Home = ({ onClickStart }) => {
  const auth = useContext(AuthContext);
  return (
    <div className='card-home'>
      {/* <p className="title">Selamat Datang</p> */}
      <div className='wrapper-home'>
        <div className='wrapper-images'>
          <img src={images} className='images' alt='images' />
        </div>
        <div>
          <p className='content'>Aturan mengerjakan :</p>
          <ul>
            <li>
              Waktu akan dihitung ketika anda memulai dengan menekan tombol
              mulai.
            </li>
            <li>Jawaban yang benar akan di nilai 1,</li>
            <li>Jawaban yang salah akan di nilai 0.</li>
            <li>Gunakan kejujuran dalam mengerjakan evaluasi ini.</li>
            <li>
              Catatan : untuk menyimpan setiap jawaban yang diubah silahkan
              tekan tombol hijau.
            </li>
          </ul>
        </div>
      </div>
      {auth.isAuthenticated() && (
        <Button to='/1' buttonText='Mulai' onClickSoal={onClickStart} />
      )}
    </div>
  );
};

export default Home;
