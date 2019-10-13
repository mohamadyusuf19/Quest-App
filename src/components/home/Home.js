import React from "react";
import "./home.scss";
import Button from "../button/Button";

const Home = () => {
  return (
    <div className="card-home">
      <p className="title">Selamat Datang</p>
      <p className="content">
        Silahkan berdoa sebelum memulai mengerjakan soal evaluasi. waktu akan
        dihitung ketika anda memulai dengan menekan tombol start. Jawaban benar
        akan di nilai 1, jawaban yang salah akan di nilai 0. Gunakan kejujuran
        dalam mengerjakan evaluasi ini.
      </p>
      <Button to="/1" buttonText="Mulai" />
    </div>
  );
};

export default Home;
