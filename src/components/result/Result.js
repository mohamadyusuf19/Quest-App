import React from "react";
import "./result.scss";

const Result = ({ nilai, benar, salah }) => {
  return (
    <div className="card">
      <p>Nilai Anda: {nilai}</p>
      <div className="flex-result">
        <p>Benar: {benar}</p>
        <p>Salah: {salah}</p>
      </div>
    </div>
  );
};

export default Result;
