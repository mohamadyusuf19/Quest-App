import React from "react";
import "./result.scss";
import moment from "moment";

moment.locale("id", {
  months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
    "_"
  ),
  weekdays: "Ahad_Senin_Selasa_Rabu_Kamis_Jum'at_Sabtu".split("_")
});
const Result = ({ nilai, benar, salah, startTime, endTime, kosong }) => {
  const duration = moment.duration(moment(endTime).diff(moment(startTime)));
  return (
    <div className="card-result">
      <div className="flex-result">
        <p className="text-result">Hari : {moment(startTime).format("dddd")}</p>
        <p className="text-result">
          Tanggal : {moment(startTime).format("Do MMMM YYYY")}
        </p>
      </div>
      <div className="flex-result">
        <div>
          <p className="text-result">
            Mulai : pukul {moment(startTime).format("HH:mm:ss")} WIB
          </p>
          <p className="text-result">
            Selesai : pukul {moment(endTime).format(" HH:mm:ss")} WIB
          </p>
          <p className="text-result">
            Durasi : {duration.hours()} jam {duration.minutes()} menit{" "}
            {duration.seconds()} detik
          </p>
          <p className="text-result">Benar : {benar}</p>
          <p className="text-result">Salah : {salah}</p>
          <p className="text-result">Kosong : {kosong}</p>
        </div>
        <div className="wrapper-nilai">
          <p className="value-result">Nilai</p>
          <p className="nilai">{nilai}</p>
        </div>
      </div>
      <p className={`text-result ${nilai < 70 ? "red" : "green"}`}>
        Keterangan : {nilai < 70 ? "Tidak Lulus" : "Lulus"}
      </p>
    </div>
  );
};

export default Result;
