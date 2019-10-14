import React from "react";
import "./result.scss";
import moment from "moment";

moment.locale("id", {
  months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
    "_"
  ),
  weekdays: "Ahad_Senin_Selasa_Rabu_Kamis_Jum'at_Sabtu".split("_")
});
const Result = ({ nilai, benar, salah, startTime, endTime }) => {
  return (
    <div className="card-result">
      <p className="value-result">Nilai</p>
      <p className="nilai">{nilai}</p>
      <div className="flex-result">
        <p className="text-result">Benar : {benar}</p>
        <p className="text-result">Salah : {salah}</p>
      </div>
      <p className="text-result">
        Mulai : {moment(startTime).format("dddd, Do MMMM YYYY, HH:mm:ss")} WIB
      </p>
      <p className="text-result">
        Selesai : {moment(endTime).format("dddd, Do MMMM YYYY, HH:mm:ss")} WIB
      </p>
    </div>
  );
};

export default Result;
