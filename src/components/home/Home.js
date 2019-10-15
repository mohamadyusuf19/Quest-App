import React from "react";
import "./home.scss";
import Button from "../button/Button";

const Home = ({ onClickStart }) => {
  return (
    <div className="card-home">
      <p className="title">Selamat Datang</p>
      <p className="content">
        Silahkan berdoa sebelum memulai mengerjakan soal evaluasi. Aturan
        mengerjakan :
      </p>
      <ul>
        <li>
          Waktu akan dihitung ketika anda memulai dengan menekan tombol mulai.
        </li>
        <li>Jawaban yang benar akan di nilai 1,</li>
        <li>Jawaban yang salah akan di nilai 0.</li>
        <li>Gunakan kejujuran dalam mengerjakan evaluasi ini.</li>
        <li>
          Catatan : untuk menyimpan setiap jawaban silahkan tekan tombol hijau.
        </li>
      </ul>
      <Button to="/1" buttonText="Mulai" onClickSoal={onClickStart} />
    </div>
  );
};

export default Home;
